import React from 'react'

//css
import './Navbar.css'

export default function Navbar() {
  return (
    <>
        <div className="navbar">
            <div className="navbar-logo">
                <img src="" alt="logo" />
            </div>
            <div className="navbar-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>

    </>
  )
}
