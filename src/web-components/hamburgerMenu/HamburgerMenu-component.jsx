import React, { useEffect, useRef, useState } from 'react';

const HamburgerMenu = ({ onToggle }) => {
const menuRef = useRef(null);
const [hidden, setHidden] = useState(false);

useEffect(() => {
const menu = menuRef.current;
if (!menu) {
  return;
}

const handleClick = () => {
  onToggle();
  setHidden(!hidden);
};

menu.addEventListener('click', handleClick);

return () => {
  menu.removeEventListener('click', handleClick);
};
}, [onToggle, hidden]);

return (
<hamburger-menu ref={menuRef} style={{ display: hidden ? 'none' : 'block' }}>
☰
</hamburger-menu>
);
};

export default HamburgerMenu;