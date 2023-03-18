import React, { useState } from 'react';
import './TopBar.css';
import { Link } from 'react-router-dom';

function TopBar() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <nav className="top-bar">
      <ul>
        <img src="/Tun_App/images/Tunisia/tnnc.png" alt="Tunisia" className="logo" />
        <li>
          <Link to="/" onClick={() => handleTabClick('Home')} className={activeTab === 'Home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/tourism"
            onClick={() => handleTabClick('Tourism')}
            className={activeTab === 'Tourism' ? 'active' : ''}
          >
            Tourism
          </Link>
        </li>
        <li>
          <Link
            to="/history"
            onClick={() => handleTabClick('History')}
            className={activeTab === 'History' ? 'active' : ''}
          >
            History
          </Link>
        </li>
        <li>
          <Link
            to="/culture"
            onClick={() => handleTabClick('Culture')}
            className={activeTab === 'Culture' ? 'active' : ''}
          >
            Culture
          </Link>
        </li>
        <li>
          <Link
            to="/technology"
            onClick={() => handleTabClick('Technology')}
            className={activeTab === 'Technology' ? 'active' : ''}
          >
            Technology and Research
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
