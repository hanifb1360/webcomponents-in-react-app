import React, { useEffect, useRef, useState } from 'react';

const HamburgerMenu = ({ onToggle }) => {
  // Create a reference to the hamburger menu element
  const menuRef = useRef(null);

  // Use the state to keep track of whether the hamburger menu should be hidden or not
  const [hidden, setHidden] = useState(false);

  // Use an effect to add an event listener to the hamburger menu that toggles it when clicked
  useEffect(() => {
    const menu = menuRef.current;
    
    // If the hamburger menu is not yet available, return
    if (!menu) {
      return;
    }

    // Create a function to handle the click event and toggle the hamburger menu
    const handleClick = () => {
      onToggle();
      setHidden(!hidden);
    };

    // Add the click event listener to the hamburger menu
    menu.addEventListener('click', handleClick);

    // Return a function to remove the click event listener when the component unmounts
    return () => {
      menu.removeEventListener('click', handleClick);
    };
  }, [onToggle, hidden]);

  // Return the hamburger menu element, using the reference to pass it to React
  // The display style is set based on the state, either hidden or not
  return (
    <hamburger-menu ref={menuRef} style={{ display: hidden ? 'none' : 'block' }}>
      ☰
    </hamburger-menu>
  );
};

export default HamburgerMenu;
