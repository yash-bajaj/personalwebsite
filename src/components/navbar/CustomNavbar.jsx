import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React from "react";
import "./CustomNavbar.css";


function CustomNavbar() {
    return(
    <Navbar className="navbar" expand="lg" variant="dark">
  <Container >
    <Navbar.Brand  className="navbar-brand" href="#" >Yash</Navbar.Brand>
  </Container>
    </Navbar>
    );
}


export default CustomNavbar;
