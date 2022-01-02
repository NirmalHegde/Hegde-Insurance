import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import backers from "./assets/backers.jpg";
import carousel1 from "./assets/carousel1.jpg";
import travel from "./assets/travel.jpg";
import life from "./assets/life.jpg";
import grad from "./assets/grad.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Link to="/contact">
            <div style={{ filter: "brightness(50%)" }}>
              <img className="d-block w-100" src={carousel1} alt="Intro" />
            </div>
            <Carousel.Caption>
              <h1>Welcome to Hegde Insurance</h1>
              <p>
                Need help with applying for insurance and investments? You have
                come to the right place!
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/life-insurance">
            <div style={{ filter: "brightness(50%)" }}>
              <img className="d-block w-100" src={life} alt="travel" />
            </div>
            <Carousel.Caption>
              <h1>Protect Your Loved Ones</h1>
              <p>
                Get life insurance and prevent your family from bearing
                financial burdern when you are not around.
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/super-visa-\u0026-visitor-visa-insurance">
            <div style={{ filter: "brightness(50%)" }}>
              <img className="d-block w-100" src={travel} alt="travel" />
            </div>
            <Carousel.Caption>
              <h1>Relatives Visiting?</h1>
              <p>
                Learn about super visa and visitor visa insurance to protect
                them from unexpected medical expenses.
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/registered-education-savings-plan">
            <div style={{ filter: "brightness(50%)" }}>
              <img className="d-block w-100" src={grad} alt="travel" />
            </div>
            <Carousel.Caption>
              <h1>Save for Your Child's Education</h1>
              <p>
                Learn options to save money for your child's future degree, tax
                free!
              </p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
      <br />
      <Container>
        <Row>
          <Col>
            <h3 className="title">
              <b>Services we Provide</b>
            </h3>
            <p>
              Hegde Insurance provides the best professional services to help
              you find the right investment or insurance opportunity for you.{" "}
              <b>We represent all major insurance companies in Canada</b> and
              can provide the best advice for your needs. To get a free quote or
              to get in contact to learn more. click the buttons below.
            </p>
            <Link to="/life-insurance">
              <Button size="md" variant="warning" type="submit">
                Receive Free Quote
              </Button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/contact">
              <Button size="md" variant="warning" type="submit">
                Contact Me
              </Button>
            </Link>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                className="profilePic"
                src={backers}
                aria-label="Shrikant-Picture"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
