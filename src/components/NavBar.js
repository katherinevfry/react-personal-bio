import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link as ScrollLink } from 'react-scroll';

const navStyle = {
  backgroundColor: '#fffbf0',
  borderBottomLeftRadius: '25px',
  borderBottomRightRadius: '25px',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '5',
  marginLeft: '20px',
  marginRight: '20px'
};

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={navStyle} light expand="md">
        <NavbarBrand href="/">Katy Fry</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <ScrollLink className="nav-link" to="projects">Projects</ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink className="nav-link" to="technologies">Technologies</ScrollLink>
            </NavItem>
            {
              admin && <NavItem>
              <Link to='/projects'>Auth Projects</Link>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any
};

export default NavBar;
