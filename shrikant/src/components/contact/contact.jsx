import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Life Insurance" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" placeholder="Let's do business!" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Contact
