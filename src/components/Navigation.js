import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navbarStyle = {
    height: '100vh',
  };

  const iconStyle = {
    fontSize: '24px',
  };

  return (
    <Navbar light expand="md" style={navbarStyle}>
      <Nav vertical className="mt-auto mb-auto align-items-center">
        <NavItem>
          <Link to="/" className="nav-link">
            <i className="fa fa-home" aria-hidden="true" style={iconStyle}></i>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="nav-link">
            <i
              className="fa fa-user-o"
              aria-hidden="true"
              style={iconStyle}
            ></i>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/skills" className="nav-link">
            <i className="fa fa-cog" aria-hidden="true" style={iconStyle}></i>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/projects" className="nav-link">
            <i
              className="fa fa-briefcase"
              aria-hidden="true"
              style={iconStyle}
            ></i>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact" className="nav-link">
            <i
              className="fa fa-envelope-o"
              aria-hidden="true"
              style={iconStyle}
            ></i>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
