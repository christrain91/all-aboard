import React from 'react'
import Router from './components/Router'
import Logo from './components/Logo'
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <div id="page-wrap">
        <Logo />
        <Router />
      </div>
    </>
  )
}

export default App
