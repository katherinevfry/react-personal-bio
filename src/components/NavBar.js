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
import katyfry from '../assets/katyfrynav.png';
import proj from '../assets/proj.png';
import tech from '../assets/tech.png';

const navStyle = {
  backgroundColor: '#fffbf0',
  borderBottomLeftRadius: '25px',
  borderBottomRightRadius: '25px',
  position: 'fixed',
  margin: ['0', 'auto'],
  top: '0',
  width: '100%',
  zIndex: '5',
  padding: '0'
};

const imgStyle = {
  width: '160px',
  cursor: 'pointer'
};

const techStyle = {
  width: '160px',
  cursor: 'pointer',
  marginLeft: '25px'
};

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={navStyle} light expand="md">
        <NavbarBrand href="/"><img src={katyfry} alt='katy fry' style={imgStyle}/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <ScrollLink className="nav-link" to="projects"><img src={proj} alt='projects' style={imgStyle}/></ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink className="nav-link" to="technologies"><img src={tech} alt='technologies' style={techStyle}/></ScrollLink>
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
