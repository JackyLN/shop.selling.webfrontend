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
  ListGroupItem,
  Collapse,
  Card,
  CardBody
 } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PageNavBar from "../components/PageNavBar";
import PageFooter from "../components/PageFooter";
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

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);

  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);
  const toggle5 = () => setIsOpen5(!isOpen5);
  const toggle6 = () => setIsOpen6(!isOpen6);
  const toggle7 = () => setIsOpen7(!isOpen7);
  const toggle8 = () => setIsOpen8(!isOpen8);
  const toggle9 = () => setIsOpen9(!isOpen9);
  const toggle10 = () => setIsOpen10(!isOpen10);



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
        <Container className="section">
          <h2 className="text-success title-section">Trading partners</h2>
          <FlagCarousel type="flag" speed="2000" />
        </Container>

        <Container className="section border-bottom bg-alternate">
          <h2 className="text-success title-section">Frequent asked questions</h2>
          <Row>
            <Col className="col-6" >
              <ListGroup>
                <ListGroupItem onClick={toggle1} action>Cras justo odio
                
                  <Collapse isOpen={isOpen1}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle2} action>Dapibus ac facilisis in
                  <Collapse isOpen={isOpen2}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle3} action>Morbi leo risus
                  <Collapse isOpen={isOpen3}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle4} action>Porta ac consectetur ac
                  <Collapse isOpen={isOpen4}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle5} action>Vestibulum at eros
                  <Collapse isOpen={isOpen5}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
              </ListGroup>  
            </Col>
            <Col className="col-6">
              <ListGroup>
                <ListGroupItem onClick={toggle6} action>Cras justo odio
                  <Collapse isOpen={isOpen6}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle7} action>Dapibus ac facilisis in
                  <Collapse isOpen={isOpen7}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle8} action>Morbi leo risus
                  <Collapse isOpen={isOpen8}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle9} action>Porta ac consectetur ac
                  <Collapse isOpen={isOpen9}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
                <ListGroupItem onClick={toggle10} action>Vestibulum at eros
                  <Collapse isOpen={isOpen10}>
                    <Card>
                      <CardBody>
                      Anim pariatur cliche reprehenderit,
                      enim eiusmod high life accusamus terry richardson ad squid. Nihil
                      anim keffiyeh helvetica, craft beer labore wes anderson cred
                      nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </ListGroupItem>
              </ListGroup>
              
            </Col>
          </Row>
          <Row>
            <Col>
              <Container className="themed-container title-center" fluid={true}>
              <h5 href="#" className="text-success title-section">More</h5>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container className="section">
          <h2 className="text-success title-section">Brands</h2>
          <FlagCarousel type="brand" speed="5000" />
        </Container>
      </div>
      <PageFooter />
    </div>
  );
}

export default HomePage;