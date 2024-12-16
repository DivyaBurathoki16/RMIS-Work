import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './assets/Logo.svg';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);

  useEffect(() => {
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvasBody = document.querySelector('.offcanvas-body');

    // Apply initial theme to the offcanvas body
    if (offcanvasBody) {
      if (isDarkMode) {
        offcanvasBody.classList.add('offcanvas-dark');
        offcanvasBody.classList.remove('offcanvas-light');
      } else {
        offcanvasBody.classList.add('offcanvas-light');
        offcanvasBody.classList.remove('offcanvas-dark');
      }
    }

    // Event listeners for opening and closing the offcanvas
    if (offcanvasElement) {
      const showHandler = () => setOffcanvasOpen(true);
      const hideHandler = () => setOffcanvasOpen(false);

      offcanvasElement.addEventListener('show.bs.offcanvas', showHandler);
      offcanvasElement.addEventListener('hide.bs.offcanvas', hideHandler);

      return () => {
        offcanvasElement.removeEventListener('show.bs.offcanvas', showHandler);
        offcanvasElement.removeEventListener('hide.bs.offcanvas', hideHandler);
      };
    }
  }, [isDarkMode]); // Re-run effect when `isDarkMode` changes

  // Handle theme toggle inside Navbar
  const handleToggleTheme = () => {
    toggleTheme(); // Toggle theme via context
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>

          {/* Always-Visible Links */}
          <ul className="navbar-nav visible-links d-flex d-lg-none">
           <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
         </li>
          <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
           </li>
         <li className="nav-item">
         <Link to="/services" className="nav-link">Services</Link>
         </li>
        <li className="nav-item">
        <Link to="/approach" className="nav-link">Approach</Link>
       </li>
       <li className="nav-item">
        <Link to="/industies" className="nav-link">Industries</Link>
       </li>
    </ul>
          {/* Offcanvas Toggle Button */}
          <button
            className={`navbar-toggler ${isDarkMode ? 'navbar-toggler-dark' : 'navbar-toggler-light'}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas Content */}
          <div
            className={`offcanvas offcanvas-start ${isDarkMode ? 'offcanvas-dark' : 'offcanvas-light'}`}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/" className="navbar-brand">
                <img src={Logo} alt="Logo" className="logo" />
              </Link>

              {/* Theme Toggle Button */}
              <div className="toggle-container" onClick={handleToggleTheme}>
                <div className={`toggle-slider ${isDarkMode ? 'dark' : ''}`}></div>
              </div>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={`offcanvas-body ${isDarkMode ? 'offcanvas-dark' : 'offcanvas-light'}`}>
              <ul className="navbar-nav flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/approach" className="nav-link">Approach</Link>
                </li>
                <li className="nav-item">
                  <Link to="/industries" className="nav-link">Industries</Link>
                </li>
                <li className="nav-item">
                  <Link to="/training" className="nav-link">Training</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Theme Toggle Button */}
          {!isOffcanvasOpen && (
            <div className="toggle-containerA" onClick={handleToggleTheme}>
              <div className={`toggle-sliderA ${isDarkMode ? 'dark' : ''}`}></div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
