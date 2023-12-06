import { useState } from 'react'
import React from 'react'
import logo from '../icons_assets/Logo.svg'
import { Link } from 'react-router-dom';

export default function Header() {

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    // setOpen((open) => !open);
    setOpen(!open);
  }

  
  return (
    <div>
      <header className="mar-20 nav-section">
        
        <img className="header-image" src={logo} alt=""/>
        <nav className="nav-links">
            <div className='hamburger-link' onClick={toggleMenu} href="/">
                <i className="fa fa-bars"></i>
            </div>
            <ul className={`nav-lists ${open ? "visible" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="/index.html">Menu</a></li>
                <li><a href="/index.html">Reservations</a></li>
                <li><a href="/index.html">Login</a></li>
            </ul>
        </nav>
    </header>
    </div>
  )
}
