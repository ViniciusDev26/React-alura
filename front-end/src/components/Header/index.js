import React from 'react';

const Header = () => {
  return (
    <nav>
        <div className="nav-wrapper deep-purple darken-4">
        <a href="/" className="brand-logo">Home Code</a>
        <ul className="right">
            <li><a href="!#">Sass</a></li>
            <li><a href="!#">Components</a></li>
            <li><a href="!#">JavaScript</a></li>
        </ul>
        </div>
    </nav>
  );
}

export default Header;