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

const NavBar = ({ admin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id='navStyle' light expand="md">
        <NavbarBrand href="/"><img src={katyfry} alt='katy fry' id='imgStyle'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <ScrollLink className="nav-link" to="projects"><img src={proj} alt='projects' id='imgStyle'/></ScrollLink>
            </NavItem>
            <NavItem>
              <ScrollLink className="nav-link" to="technologies"><img src={tech} alt='technologies' id='techStyle'/></ScrollLink>
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
