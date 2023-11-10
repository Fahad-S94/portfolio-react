import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons';
import LogoFS from '../../app/assets/img/logoFS.png';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Navigation.scss'; 

const Navigation = () => {
  return (
    <Navbar color="warning" expand="md" className="flex-column">
      <NavbarBrand className="mb-4">
        <NavLink className="logo" to="/">
          <img src={LogoFS} alt="Logo" style={{ width: 80 }} />
          <h1 className="logo-text" style={{ fontSize: 24, textAlign: 'center', color: 'red' }}>
            Fahad S.
          </h1>
        </NavLink>
      </NavbarBrand>
      <Nav className="mt-auto mb-auto align-items-center flex-column">
        <NavItem>
          <NavLink exact activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} size="xl" color="maroon" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} size="xl" color="maroon" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} size="xl" color="maroon" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" color="maroon" />
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarBrand className="mt-4">
        <ul className="list-unstyled">
          <li>
            <a
              href="https://www.linkedin.com/in/f-shoaib1580/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                color="maroon"
                className="anchor-icon"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Fahad-S94"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="xl"
                color="maroon"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </NavbarBrand>
    </Navbar>
  );
};

export default Navigation;
