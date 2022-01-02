import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shripic from "./assets/shripic.jfif";
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
            <img
              className="profilePic"
              src={shripic}
              aria-label="Shrikant-Picture"
            />
          </Col>
          <Col>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              repudiandae accusantium perspiciatis iste aperiam consectetur
              fugit ullam odio libero, magni, dolores exercitationem minima
              totam sequi iusto eius esse corrupti culpa! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ipsum tenetur nihil
              perspiciatis necessitatibus debitis sapiente veniam odit,
              laudantium libero praesentium ex voluptate, qui tempore porro
              quidem laboriosam. Ea, ad inventore?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
