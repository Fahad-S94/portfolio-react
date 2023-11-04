import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar color="light" light expand="md">
      <Link to="/" className="navbar-brand">
        Personal Portfolio
      </Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/skills" className="nav-link">
            Skills
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
