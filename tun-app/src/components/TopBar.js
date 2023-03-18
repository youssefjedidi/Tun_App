import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { Link, useLocation } from 'react-router-dom';

function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? 'top-bar scrolled' : 'top-bar'}>
      <ul>
        <img src="/Tun_App/images/Tunisia/tnnc.png" alt="Tunisia" className="logo"></img>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <Link to="/tourism" className={location.pathname === "/tourism" ? "active" : ""}>Tourism</Link>
        </li>
        <li>
          <Link to="/history" className={location.pathname === "/history" ? "active" : ""}>History</Link>
        </li>
        <li>
          <Link to="/culture" className={location.pathname === "/culture" ? "active" : ""}>Culture</Link>
        </li>
        <li>
          <Link to="/technology" className={location.pathname === "/technology" ? "active" : ""}>Technology and Research</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
