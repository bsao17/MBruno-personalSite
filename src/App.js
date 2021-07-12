import {Home, About, Services, Portfolio, Contact} from "./components";

import AOS from "aos";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

function App(props) {
  const[component, setComponent] = useState(<Home/>)

  useEffect(()=>{AOS.init()}, [])

  return (
    <div id="App" className={"AppContainer"}>
      <div>
        <Navbar expand="lg" id="navBar" >
          <Navbar.Brand href="#"><span id="navLogo">MB</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={()=>{setComponent(<Home/>)}}><i className="fas fa-home"/> Accueil</Nav.Link>
              <Nav.Link onClick={()=>{setComponent(<About/>)}}><i className="far fa-address-card"/> A propos</Nav.Link>
              <Nav.Link href="" ><i className="fab fa-wordpress"></i> Blog</Nav.Link>
              <Nav.Link onClick={()=>{setComponent(<Portfolio/>)}}><i className="fas fa-briefcase"/> Portfolio</Nav.Link>
              <Nav.Link onClick={()=>{setComponent(<Contact/>)}}><i className="fas fa-address-book"/> Contactez-moi</Nav.Link>

              {/* <NavDropdown title="Plus" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={()=>setComponent(<Contact/>)}><i className="fas fa-address-book"/> Contactez-moi</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div>
        {component}
      </div>
    </div>
  );
}

export default App;
