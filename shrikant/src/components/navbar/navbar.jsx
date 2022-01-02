import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import logo from "./assets/shrilogo.png";
import { insuranceItems, investmentItems } from "../items";
import "./navbar.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img className="navlogo" src={logo} alt="shrilogo" />
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Insurance" id="basic-nav-dropdown">
              {insuranceItems.map((item) => (
                <NavDropdown.Item
                  href={item.toLowerCase().split(" ").join("-")}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Investments" id="basic-nav-dropdown">
              {investmentItems.map((item) => (
                <NavDropdown.Item
                  href={item.toLowerCase().split(" ").slice(0, -1).join("-")}
                >
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavbar;
