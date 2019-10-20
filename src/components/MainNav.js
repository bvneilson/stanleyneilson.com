import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const MainNav = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto"><img src="/images/stanley-logo.jpg" alt="Stanley Logo" className="img-responsive" /></NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/" onClick={toggleNavbar}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/tribute" onClick={toggleNavbar}>Tribute</Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery" onClick={toggleNavbar}>Gallery</Link>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  )
}

export default MainNav;
