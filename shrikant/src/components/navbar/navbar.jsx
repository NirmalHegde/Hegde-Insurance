import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/shrilogo.png'
import './navbar.css'

const MyNavbar = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="navlogo" src={logo} alt="shrilogo" />
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#insurance">Insurance</Nav.Link>
            <Nav.Link href="#investments">Investments</Nav.Link>
            <Nav.Link href="#supervisa">Supervisa</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
