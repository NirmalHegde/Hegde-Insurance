import React from "react";
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
          <h1 className="title">About</h1>
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
              "Economical and Financial Services". I represent most Canadian
              insurance providers on Life Insurance, Travel Insurance, Super
              visa insurance, Health Insurance, TFSA, Seg funds investments,
              RESP and RRSP.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
