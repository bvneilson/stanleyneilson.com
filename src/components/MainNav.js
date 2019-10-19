import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const MainNav = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar color="faded" light>
      <NavbarBrand href="/" className="mr-auto"><img src={require("../images/stanley-logo.jpg")} alt="Stanley Logo" className="img-responsive" /></NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Tribute</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Gallery</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </Navbar>
  )
}

export default MainNav;
