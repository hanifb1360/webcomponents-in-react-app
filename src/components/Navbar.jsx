import React, { useState } from 'react';
import logo from '../resources/images/logo.svg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar'>
      
      <img
        src= {logo}
        alt="Logo"
        class="logo"
      />
      
      
      <hamburger-menu onToggle={() => setIsOpen(!isOpen)}>☰</hamburger-menu>
     
      {isOpen && (
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;

