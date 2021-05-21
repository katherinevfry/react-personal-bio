import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const navStyle = {
  backgroundColor: '#fffbf0',
  borderBottomLeftRadius: '25px',
  borderBottomRightRadius: '25px'
};

const NavBar = () => {
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
              <Link className="nav-link" to="/projects">Projects</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/technologies">Technologies</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
