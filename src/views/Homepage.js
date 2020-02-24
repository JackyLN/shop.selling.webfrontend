import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { 
  Alert,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,  
  Container,
  Media,
  Col,
  Row,
  ListGroup,
  ListGroupItem
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageNavBar from "../components/PageNavBar";
import FlagCarousel from "../components/FlagCarousel";
import "../styles/skeleton.scss";
import "../styles/homepage.scss";

import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import point1 from "../assets/img/thumbs-up-solid.svg";
import point2 from "../assets/img/headset-solid.svg";
import point3 from "../assets/img/shipping-fast-solid.svg";
import point4 from "../assets/img/info-circle-solid.svg";

const items = [
  {
    src: slide1,
    altText: '',
    caption: ''
  },
  {
    src: slide2,
    altText: '',
    caption: ''
  },
];

const HomePage = (props) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }
  
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} width="100%" height="50%" alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  var imgStyle = {
    minWidth: "58px",
  };

  return (
    <div className="mycontainer">
      <PageNavBar />
      <div className="mainbody">
        <div className="section">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>

        <Container className="section border-bottom">
          <Row>
            <Col className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon"><span className="flaticon-window display-4"><Media className="media-img" style={imgStyle} src={point1} alt="" object /></span></div>
                <div className="media-body">
                  <h5 className="mt-0">Unique and quality products</h5>
                  Direct imported from manufactures
                </div>
              </div>
            </Col>

            <Col className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon"><span className="flaticon-window display-4"><Media className="media-img" style={imgStyle} src={point2} alt="" object /></span></div>
                <div className="media-body">
                  <h5 className="mt-0">Professional customer service</h5>
                  Free dedicated consultation
                </div>
              </div>
            </Col>

            <Col className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon"><span className="flaticon-sit-down display-4"><Media className="media-img" style={imgStyle} src={point3} alt="" object /></span></div>
                <div className="media-body">
                  <h5 className="mt-0">Fast delivery</h5>
                  Delivery islanwide
                </div>
              </div>
            </Col>

            <Col className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <div className="media custom-media">
                <div className="mr-3 icon"><span className="flaticon-turned-off display-4"><Media className="media-img" style={imgStyle} src={point4} alt="" object /></span></div>
                <div className="media-body">
                  <h5 className="mt-0">Regular updates of new products</h5>
                  Fresh & accurate updates
                </div>
              </div>
            </Col>
          </Row>
        </Container>
          <ListGroup>
            <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        <Container className="section">
          <h2 className="text-success title-section">Trading partners</h2>
          <FlagCarousel type="flag"/>
        </Container>

        <Container className="section border-bottom">
          <h2 className="text-success title-section">Frequent asked questions</h2>

        </Container>

        <Container className="section">
          <h2 className="text-success title-section">Brands</h2>
          <FlagCarousel type="brand" />
        </Container>
      </div>
    </div>
  );
}

export default HomePage;