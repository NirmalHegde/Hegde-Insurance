import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shripic from "./assets/profile.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="root">
      <Container>
        <Row>
          <h1 className="title">
            <b>About Me</b>
          </h1>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <div className="container">
              <img
                className="profilePic"
                src={shripic}
                aria-label="Shrikant-Picture"
              />
            </div>
          </Col>
          <Col>
            <p>
              I am an insurance advisor working under a leading brokerage
              "Economical and Financial Services". I represent all major
              Canadian insurance providers on Life Insurance, Travel Insurance,
              Super Visa insurance, Health Insurance, TFSA, Seg Funds
              Investments, RESP, and RRSP in Ontario. I am committed to providing
              the best customer service. I provide free-no obligation quotes. I
              explain the products and answer your questions until you are
              satisfied. No pressure to buy the product.
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
        </Row>
      </Container>
    </div>
  );
};

export default About;
