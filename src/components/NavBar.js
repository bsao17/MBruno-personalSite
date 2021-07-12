import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" id="navBar" >
        <Navbar.Brand href="#"><span id="navLogo">MB</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#aboutTitle">A propos</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#folio">Portfolio</Nav.Link>
            <NavDropdown title="Projets" id="basic-nav-dropdown">
              <NavDropdown.Item href="#folio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Infos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
