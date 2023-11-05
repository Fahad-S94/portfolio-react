import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar
      color="light"
      light
      expand="md"
      className="d-flex align-items-center"
    >
      <Nav vertical>
        <NavItem>
          <Link to="/" className="nav-link">
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="nav-link">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/skills" className="nav-link">
            <i class="fa fa-cog" aria-hidden="true"></i>
            Skills
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projects" className="nav-link">
            <i class="fa fa-briefcase" aria-hidden="true"></i>
            Projects
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className="nav-link">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            Contact
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
