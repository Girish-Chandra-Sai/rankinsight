import React, { useState } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // You can implement the search functionality here or pass it to a parent component
  };
  
  return (
    <div className="navbar">
      <div className="navbar-logo">
        {/* You can replace with your actual logo */}
        <img src="/logo-placeholder.png" alt="JEE Explorer Logo" />
        <h1>JEE Explorer</h1>
      </div>
      
      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;