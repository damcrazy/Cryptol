import { useState } from 'react'

import './App.css'

//components
import MainNavbar from './Components/Navbar/Navbar'
import Logo_cool from './Components/Logo-cool/Logo_cool'

function App() {
  return (
    <div className="App">
      <MainNavbar /> 
      <div id="particles-js"></div>
      <Logo_cool/>
    </div>
  )
}

export default App
