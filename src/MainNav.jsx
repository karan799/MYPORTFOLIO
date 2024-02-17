import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMobileMenuOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(isMobileMenuOpen);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    console.log("hello");
  };

  return (
    <nav className="bg-gray-800 p-4">
      {/* <div className="flex items-center justify-between"> */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className={`text-white ${location.pathname === '/' ? 'font-bold' : ''}`}
            

          >
            Home
          </Link>
          {/* <Link
            to="/userForm"
            className={`text-white ${location.pathname === '/userForm' ? 'font-bold' : ''}`}
          >
            User Form
          </Link> */}
          {/* <Link
            to="/"
            className={`text-white ${location.pathname === '/userForm' ? 'font-bold' : ''}`}
          >
            User Form
          </Link> */}
          {/* <Link
            to="/projectapi"
            className={`text-white ${location.pathname === '/projectapi' ? 'font-bold' : ''}`}
          >
            Project API
          </Link> */}
          <Link
            to="registration"
            className={`text-white ${location.pathname === '/portfolio/:username' ? 'font-bold' : ''}`}
          >
            Rgistration
          </Link>
          <Link
            to="/login"
            className={`text-white ${location.pathname === '/template2' ? 'font-bold' : ''}`}
          >
           login
          </Link>
          {/* <Link
            to="/template1"
            className={`text-white ${location.pathname === '/template1' ? 'font-bold' : ''}`}
          >
            Template 1
          </Link> */}
          {/* <Link
            to="/template2"
            className={`text-white ${location.pathname === '/template2' ? 'font-bold' : ''}`}
          >
            Template 2
          </Link> */}
          {/* <Link
            to="/portfolio/bhatia"
            className={`text-white ${location.pathname === '/template2' ? 'font-bold' : ''}`}
          >
            portfolio
          </Link> */}
          
          <Link
            to="/templateSelector"
            className={`text-white ${location.pathname === '/template2' ? 'font-bold' : ''}`}
          >
           LOGOUT
          </Link>
        </div>
        

        {/* <button
          className="text-white focus:outline-none sm:hidden"
          onClick={toggleMobileMenu}
        >
          Toggle Mobile Menu
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="flex flex-col mt-4 space-y-2 sm:hidden">
          <Link to="/" onClick={closeMobileMenu} className="text-white">
            Home
          </Link>
          <Link to="/userForm" onClick={closeMobileMenu} className="text-white">
            User Form
          </Link>
          <Link to="/projectapi" onClick={closeMobileMenu} className="text-white">
            Project API
          </Link>
          <Link to="/portfolio/:username" onClick={closeMobileMenu} className="text-white">
            Portfolio
          </Link>
          <Link to="/template1" onClick={closeMobileMenu} className="text-white">
            Template 1
          </Link>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
