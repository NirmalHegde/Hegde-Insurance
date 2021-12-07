import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const submitForm = (e) => {
        console.log(email);
        e.preventDefault();
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="John Doe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Life Insurance" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="body">
                <Form.Label>Message</Form.Label>
                <Form.Control value={body} onChange={(e) => setBody(e.target.value)} type="textarea" placeholder="Let's do business!" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Contact
