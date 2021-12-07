import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "./assets/shrilogo.png";
import "./navbar.css";

const MyNavbar = ({page, changePage}) => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img className="navlogo" src={logo} alt="shrilogo" />
          </Navbar.Brand>
          <Nav activeKey={page} className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link eventKey={page} href="home">Home</Nav.Link>
            <NavDropdown title="Insurance" id="basic-nav-dropdown">
              <NavDropdown.Item href="life-insurance">
                Life Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="critical-illness">
                Critical Illness Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="disability-insurance">
                Disability Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="mortgage-insurance">
                Mortgage Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="druganddental-insurance">
                Drug and Dental Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="nomedicallife-insurance">
                No Medical Life Insurance
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="investments">Investments</Nav.Link>
            <Nav.Link href="supervisa">Supervisa</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
