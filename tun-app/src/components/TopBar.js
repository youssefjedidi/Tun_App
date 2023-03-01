import React, { useState, useEffect } from 'react';
import './TopBar.css';
import {Link} from 'react-router-dom';

function TopBar() {
  const [scrolled, setScrolled] = useState(false);

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
        <img src="/Tun_App/images/Tunisia/tnnc.png" alt="Tunisia"  className="logo" ></img>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tourism">Tourism</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/culture">Culture</Link>
        </li>
        <li>
          <Link to="/technology">Technology and Research</Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
