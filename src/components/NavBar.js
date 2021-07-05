import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" id="navBar" >
        <Navbar.Brand href="#"><span id="navLogo">MB</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#aboutTitle">A propos</Nav.Link>
            <Nav.Link href="http://agence-web.devwebdino.com/" target="blank">Blog</Nav.Link>
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
