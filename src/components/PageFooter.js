import React, { useState, useEffect } from 'react';
import { Container,
  Row,
  Col
 } from 'reactstrap';

import { NavLink as RRNavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/PageFooter.scss";
import logo from "../assets/img/logo1.png";


const PageFooter = (props) => {
  return (
    <Container className="p-3 bg-footer" fluid={true}>
      <Container className="themed-container">
        <Row>
          <Col xs="6" sm="8">
            <img className="img-responsive" src={logo} />vis.com.sg
            <p><b>VIS</b> is a global trading company based in Singapore</p>
          </Col>
          <Col xs="6" sm="4">
            <p><b>Contact Us</b></p>
            <p>Ms Linda Le (Wholesale) <br />
              <b>Tel:</b> +65 9127 0278 <br />
              <b>Email:</b> linda@vis.com.sg</p>
          </Col>
        </Row>
      </Container>
      <Container className="bottom"><b>Copyright © 2020 VIS Global Trading</b></Container>
    </Container>
  );
}

export default PageFooter;