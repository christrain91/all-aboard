'use strict'

const express = require('express')
const path = require('path')

const app = express()
const baseDirectory = process.cwd()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(baseDirectory, 'build')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(baseDirectory, 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}! 🎉`)
})
