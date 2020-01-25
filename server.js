'use strict'

const express = require('express')
const path = require('path')
const request = require('request')

const app = express()
const baseDirectory = process.cwd()

const PORT = process.env.PORT || 8080

// Load environment variables from file
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

app.use(express.static(path.join(baseDirectory, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(baseDirectory, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Settings are: ${JSON.stringify(SETTINGS, null, 2)}`)
  console.log(`Server listening on port: ${PORT}! 🎉`)
})
