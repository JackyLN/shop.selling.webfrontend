import React, { Component, useState } from "react";
import { Container,
  Card,
  CardImg,
  CardBody
 } from 'reactstrap';

import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { NavLink as RRNavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import chinaFlag from '../assets/img/china-flag-xs.png';
import japanFlag from '../assets/img/japan-flag-xs.png';
import malaysiaFlag from '../assets/img/malaysia-flag-xs.png';
import singaporeFlag from '../assets/img/singapore-flag-xs.png';
import southKoreaFlag from '../assets/img/south-korea-flag-xs.png';
import taiwanFlag from '../assets/img/taiwan-flag-xs.png';
import thailandFlag from '../assets/img/thailand-flag-xs.png';
import vietnamFlag from '../assets/img/vietnam-flag-xs.png';

import product1 from '../assets/img/carousel-product1.jpg';
import product2 from '../assets/img/carousel-product2.jpg';
import product3 from '../assets/img/carousel-product3.jpg';
import product4 from '../assets/img/carousel-product4.jpg';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
};

const flag_items = [
  {
    src: chinaFlag
  },
  {
    src: japanFlag
  },
  {
    src: malaysiaFlag
  },
  {
    src: singaporeFlag
  },
  {
    src: southKoreaFlag
  },
  {
    src: taiwanFlag
  },
  {
    src: thailandFlag
  },
  {
    src: vietnamFlag
  }
];

const brand_items = [
  {
    src: product1
  },
  {
    src: product2
  },
  {
    src: product3
  },
  {
    src: product4
  }
]

const FlagCarousel = (props) => {
  const items = props.type == "flag" ? flag_items : brand_items;
  return ( 
    <div>
      <MultiCarousel
        responsive={responsive}
        arrows={false}
        centerMode={false}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        customTransition="transform 500ms ease-in-out"
        containerClass="carousel-container"
      >
        {
          items.map((item) => {
            return (
              <Container key={item.src}>
                {/* <Card key={item.src}>
                  <CardImg top width="100%" height="100%"src={item.src} alt="" />
                </Card> */}
                <img src={item.src} width="60%" /> 
              </Container>
            )
          })
        } 
        {/* {slides} */}
      </MultiCarousel>
    </div>
  );
}


export default FlagCarousel;