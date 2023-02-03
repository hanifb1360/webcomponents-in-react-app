import React from 'react';

const HamburgerMenu = ({ onToggle }) => {
  let menu;

  const handleClick = () => {
    onToggle();
  };

  return (
    <hamburger-menu ref={node => menu = node} onClick={handleClick}>
      ☰
    </hamburger-menu>
  );
};

export default HamburgerMenu;
