import React from 'react';

import './header.styles.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/" className="logo">
        <p className="logo-icon">
          <FontAwesomeIcon icon={faVideo} />
        </p>
        <p className="logo-text">MT Sercher</p>
      </Link>
    </div>
  </div>
);

export default Header;
