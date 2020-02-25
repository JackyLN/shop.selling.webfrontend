import React, { Component, useState, useEffect } from 'react';
import { Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown, 
  Button } from 'reactstrap';

import { NavLink as RRNavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/PageNavBar.scss";
import logo from "../assets/img/logo1.png";


const PageNavBar = (props) => {

  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
  }

  useEffect(() => {
    //componentDidMount
    window.addEventListener("scroll", handleScroll);

    //componentWillUnmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Navbar className="navbar" color="white" light expand="md" sticky="top">
        <NavbarBrand className="nav-logo" href="/"><img className="img-responsive" src={logo}/></NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={RRNavLink} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/about">About VIS</NavLink>
          </NavItem>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Product
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink to="https://github.com/reactstrap/reactstrap">Brands</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/components/">News</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={RRNavLink} to="/contact">Contact Us</NavLink>
          </NavItem> */}
        </Nav>
        <Nav className="mr-auto" pills>
          <NavItem>
            <div className="d-inline-block mr-2">
            <Button color="success"><FontAwesomeIcon icon="sign-in-alt" /> Login</Button>
            </div>
          </NavItem>
          <NavItem>
            <div className="d-inline-block mr-2">
            <Button color="primary"><FontAwesomeIcon icon="user-plus" /> Signup</Button>
            </div>
          </NavItem>
          
        </Nav>
      </Navbar>
  );
}

export default PageNavBar;