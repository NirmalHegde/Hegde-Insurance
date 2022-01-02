import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [validated, setValidated] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === true) {
      const emailObj = {
        subject: subject,
        body: body,
        name: name,
        sender: email,
      };

      axios
        .post("https://shrikant-insurance-backend.herokuapp.com/", emailObj)
        .then((result) => {
          console.log(result);
          alert("Message has been submitted 🚀");
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
            <b>Let's Get in Contact!</b>
          </h1>
        </Row>
        <br />
        <Row>
          <Col>
            <p>
              <b>Call:</b> (647)-904-2587
            </p>
            <p>
              <b>Email:</b> shegde111@gmail.com
            </p>
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
              <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Life Insurance"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="body">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  as="textarea"
                  rows={4}
                  placeholder="Let's do business!"
                />
              </Form.Group>
              <Button size="lg" variant="warning" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
