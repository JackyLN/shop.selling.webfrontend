import React, { useState, useEffect } from 'react';
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


const PageFooter = (props) => {
  return (
    <div>
      Footer
    </div>
  );
}

export default PageFooter;