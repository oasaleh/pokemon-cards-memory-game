import React from 'react';
import logo from '../Images/logo.png';
function Header() {
  return (
    <header className="header">
      <img className="img logo" src={logo} alt="Pokemon Logo"></img>
    </header>
  );
}
export default Header;
