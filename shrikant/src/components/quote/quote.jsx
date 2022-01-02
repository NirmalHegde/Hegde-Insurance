import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import { insuranceItems, investmentItems } from "../items";
import placeholder from "./assets/placeholder.jpg";
import "./quote.css";
import LifeInsurance from "./descriptions/lifeinsurance";
import CriticalIllnessInsurance from "./descriptions/criticalillnessinsurance";
import TravelInsurance from "./descriptions/travelinsurance";
import SuperVisaVisitorInsurance from "./descriptions/supervisavisitorinsurance";

const Quote = ({ quoteItem }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [quote, setQuote] = useState(quoteItem);
  const submitForm = (e) => {
    console.log(email);
    e.preventDefault();
  };

  return (
    <div className="root">
      <Container>
        <Row>
          <h1 className="title">Get a Quote!</h1>
        </Row>
        <br />
        <Row>
          <Col>
            <img className="quotePic" src={placeholder} aria-label="placeholder" />
            <br /><br />
            {quote === "Life Insurance" && (
              <LifeInsurance />
            )}
            {quote === "Critical Illness Insurance" && (
              <CriticalIllnessInsurance />
            )}
            {quote === "Travel Insurance" && (
              <TravelInsurance />
            )}
            {quote === "Super Visa / Visitor Visa Insurance" && (
              <SuperVisaVisitorInsurance />
            )}
          </Col>
          <Col>
            <Form onSubmit={submitForm}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="body">
                <Form.Label>Quote</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    type="text"
                  />
                  <DropdownButton
                    variant="outline-secondary"
                    id="input-group-dropdown-1"
                    onSelect={(key) => setQuote(key)}
                  >
                    {insuranceItems.map((item) => (
                      <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    {investmentItems.map((item) => (
                      <Dropdown.Item eventKey={item}>{item}</Dropdown.Item>
                    ))}
                  </DropdownButton>
                </InputGroup>
              </Form.Group>
              <Button size="lg" variant="warning" type="submit">
                Receive Quote
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quote;
