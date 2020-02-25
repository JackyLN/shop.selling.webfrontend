import React, { useState, useEffect } from 'react';
import { Container,
  Row,
  Col
 } from 'reactstrap';

import { NavLink as RRNavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/skeleton.scss";
import "../styles/aboutus.scss";

import PageNavBar from "../components/PageNavBar";
import PageFooter from "../components/PageFooter";

import loremimg1 from "../assets/img/1001-540x262.jpg";
import loremimg2 from "../assets/img/180-540x262.jpg";
import loremimg3 from "../assets/img/407-540x262.jpg";
import loremimg4 from "../assets/img/435-540x262.jpg";

const AboutUs = (props) => {
  return (
    <div>
      <PageNavBar />
      <div className="mainbody bg-alternate">
        <Container className="rowspace" >
          <Row>
            <Col xs="6" sm="6">
              <img src={loremimg1} width="100%" />
            </Col>
            <Col xs="6" sm="6">
              <h3 className="text-success title-section">About VIS</h3>
              <p><span className="text-alternate">VIS</span> is a global trading company based in Singapore.
        We specialise in sourcing exporting, importing, and distribution of unique, lifestyle brands in South East Asia.
        VIS is distributing FMCG products to more than 200 selling points in Singapore. </p>
            </Col>
          </Row>
        </Container>
        <Container className="rowspace">
          <Row>
            <Col xs="6" sm="6">
              <h3 className="text-success title-section">Vision</h3>
              <p>To be the leader in FMCG distribution in Singapore and Vietnam.</p>
            </Col>
            <Col xs="6" sm="6">
              <img src={loremimg2} width="100%" />
            </Col>
          </Row>
        </Container>
        <Container className="rowspace">
          <Row>
            <Col xs="6" sm="6">
              <img src={loremimg3} width="100%" />
            </Col>
            <Col xs="6" sm="6">
              <h3 className="text-success title-section">Mission</h3>
              <p>To bring high quality products to every family at affordable price. </p>
            </Col>
          </Row>
       
        </Container>
        <Container className="rowspace">
          <Row>
            <Col xs="6" sm="6">
              <h3 className="text-success title-section">Our team</h3>
              <p>Our sales and marketing team effectively identify market demand, establish creative marketing strategies and quick response to customer request. 
Our operation team ensures goods are delivered accurately and on-time to customers. 
Our purchasing team continuously assess customer’s demand to introduce new products to the market. </p>
            </Col>
            <Col>
              <img src={loremimg4} width="100%" />
            </Col>
          </Row>
        </Container>
      </div>
      <PageFooter />
    </div>
  );
}

export default AboutUs;