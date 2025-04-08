import React from 'react'
import "./layout.css"
import {Link, useNavigate} from "react-router-dom"
const Header = () => {
  const navigate = useNavigate();
  const handleRedirect=()=>{
    navigate("/")
  }
  return (
    <header>
      <div className='header-container'>
      <h2 className='logo' onClick={handleRedirect}>PM</h2>
      <div className="nav-container">
        <Link className={`nav-link`} to="/">Home</Link>
        <Link className={`nav-link`} to="/project">Projects</Link>
        <Link className={`nav-link`} to="/resume">Resume</Link>
      </div>
    </div>
    </header>
  )
}

export default Header
