import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const sectionMap = {
  home: 'home',
  'about-me': 'about-me',
  pricing: 'pricing',
  gallery: 'gallery',
  appointment: 'appointment',
  contact: 'contact',
};

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to section logic, works from any page
  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" id="top">
      <div className="header-bottom" data-header>
        <div className="container">
          <Link to="/" className="logo">
            RANYECUTS
          </Link>

          <nav className="navbar container" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <Link
                  to="/"
                  className="navbar-link"
                  data-nav-link
                  onClick={e => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  HOME
                </Link>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link
                  onClick={() => scrollToSection(sectionMap['about-me'])}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >ABOUT-ME</button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link
                  onClick={() => scrollToSection(sectionMap['pricing'])}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >PRICING</button>
              </li>
              <li className="navbar-item">
                <Link to="/home" className="navbar-link" data-nav-link> 
                  GALLERY
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/appointment" className="navbar-link" data-nav-link>
                  APPOINTMENT
                </Link>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link
                  onClick={() => scrollToSection(sectionMap['contact'])}
                  style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
                >CONTACT</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-divider"></div>

      </div>
    </header>
  );
};

export default Header;
