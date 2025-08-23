import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Home from "../Pages/Home";
   
const Header = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "rgb(165, 85, 240)" }} data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="home">Home</Nav.Link> */}
            <Link className="mt-2" style={{textDecoration:'none', color:'white'}} to={'/'} element={<Home/>} >Home</Link>
            <Nav.Link href="features">About</Nav.Link>
            <a href="Contact.jsx">Contact</a>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
