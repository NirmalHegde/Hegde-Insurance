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
import "./quote.css";
import LifeInsurance from "./descriptions/lifeinsurance";
import CriticalIllnessInsurance from "./descriptions/criticalillnessinsurance";
import TravelInsurance from "./descriptions/travelinsurance";
import SuperVisaVisitorInsurance from "./descriptions/supervisavisitorinsurance";
import RESP from "./descriptions/resp";
import RRSP from "./descriptions/rrsp";
import TFSA from "./descriptions/tfsa";

const Quote = ({ quoteItem }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [quote, setQuote] = useState(quoteItem);
  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() === true) {
      const quoteObj = {
        name: name,
        sender: email,
        quote: quote,
        phone: phone,
      };

      axios
        .post(
          "https://shrikant-insurance-backend.herokuapp.com/quote",
          quoteObj
        )
        .then((result) => {
          console.log(result);
          alert("Quote request has been submitted 🚀");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong...");
        });
      setValidated(true);
    } else {
      e.stopPropagation();
    }
  };

  return (
    <div className="root">
      <Container>
        <Row>
          <h1 className="title">
            <b>Get a Quote!</b>
          </h1>
        </Row>
        <br />
        <Row>
          <Col>
            {quote === "Life Insurance" && <LifeInsurance />}
            {quote === "Critical Illness Insurance" && (
              <CriticalIllnessInsurance />
            )}
            {quote === "Travel Insurance" && <TravelInsurance />}
            {quote === "Super Visa \u0026 Visitor Visa Insurance" && (
              <SuperVisaVisitorInsurance />
            )}
            {quote === "Registered Education Savings Plan (RESP)" && <RESP />}
            {quote === "Registered Retirement Savings Plan (RRSP)" && <RRSP />}
            {quote === "Tax-Free Savings Account (TFSA)" && <TFSA />}
          </Col>
          <Col>
            <Form noValidate validated={validated} onSubmit={submitForm}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="(905)-555-2345"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="body">
                <Form.Label>Quote</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    required
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
      <br />
      <br />
      <br />
    </div>
  );
};

export default Quote;
