import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MainNavbar() {
    return (
  <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Navbar.Brand href="#home">Nick Rider</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#/">About</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
  </Navbar>
);
}
export default MainNavbar