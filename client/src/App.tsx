import { useState } from 'react'

import './App.css'

//components
import MainNavbar from './Components/Navbar/Navbar'
import Logo_cool from './Components/Logo-cool/Logo_cool'

function App() {
  return (
    <div className="App">
      <div className="Nav">
      <MainNavbar /> 
      <div id="particles-js"></div>
      </div>
      <Logo_cool/>
    </div>
  )
}

export default App
