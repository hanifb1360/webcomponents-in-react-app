import React, { useState } from 'react';
import logo from '../resources/images/logo.svg';
import HamburgerMenu from '../web-components/hamburgerMenu/HamburgerMenu-component';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className="logo" />
      <HamburgerMenu onToggle={handleToggle}>☰</HamburgerMenu>
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


