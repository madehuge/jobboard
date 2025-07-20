import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav className="bg-dark p-2">
        <Link to="/" className="text-white me-3 text-decoration-none">Home</Link>
        <Link to="/login" className="text-white text-decoration-none">Login</Link>
        </nav>
    </header>
  );
}

export default Header;
