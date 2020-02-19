import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faGithubSquare,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import './footer.style..scss';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <Link to="/" className="logo">
            <p className="logo-icon">
              <FontAwesomeIcon icon={faVideo} />
            </p>
            <p className="logo-text">MT Sercher</p>
          </Link>
        </div>

        <div className="col-md-4">
          <div className="media ">
            <span>
              <a href="https://www.facebook.com/usman.ghani.jaffri">
                <FontAwesomeIcon className="fa" icon={faFacebookSquare} />
              </a>
            </span>
            <span>
              <a href="https://github.com/usman123737">
                <FontAwesomeIcon className="git" icon={faGithubSquare} />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/16_jafri">
                <FontAwesomeIcon className="tw" icon={faTwitterSquare} />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="copy-text">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
