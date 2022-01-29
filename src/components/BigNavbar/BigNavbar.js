import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {About, Contact, Home, Portfolio, WhoIAm, Services} from "../index";

export default function BigNavBar(props) {
    const [expanded, setExpanded] = useState(false);
    const scrollChange = () => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                document.getElementById('navBar').style.backgroundColor = "#efda5d"
                document.getElementById('navBar').style.height = "7%"
            } else if (window.scrollY < 1) {
                document.getElementById('navBar').style.backgroundColor = "transparent"
                document.getElementById('navBar').style.height = "10%"
                document.getElementById('navBar').style.transitionDuration = "0.2s"
            }
        })
    }

    useEffect(scrollChange, [window.scrollY])

    return (
        <div>
            <Navbar expand="lg" id="navBar" className={"dropdown"}>
                <Navbar.Brand href="#"><span id="navLogo">MB</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={()=>{setExpanded(true)}}  className="toggle"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className={ expanded ? "navlink d-flex flex-column justify-content-center align-items-center" : "collapse"} id={"dropdown"}>
                        <Nav.Link onClick={() => {
                            setExpanded(false)
                            props.component(<Home/>)
                        }}> <i className="fas fa-home"/> Accueil</Nav.Link>
                        <Nav.Link onClick={() => {
                            setExpanded(false)
                            props.component(<About/>)
                        }}> <i className="far fa-address-card"/> A propos</Nav.Link>
                        <Nav.Link onClick={() => {
                            setExpanded(false)
                            props.component(<WhoIAm/>)
                        }}> <i className="fas fa-male"/>  Qui Suis-je</Nav.Link>
                        <Nav.Link onClick={() => {
                            setExpanded(false)
                            props.component(<Services/>)
                        }}><i className="fas fa-network-wired"/> Services</Nav.Link>
                        <Nav.Link onClick={() => {
                            setExpanded(false)
                            props.component(<Portfolio/>)
                        }}><i className="fas fa-briefcase"/> Portfolio</Nav.Link>
                        <Nav.Link href="https://startergatsbyblog92382.gatsbyjs.io/" target={"blank"}><i
                            className="fab fa-wordpress"/> Blog</Nav.Link>
                        <Nav.Link onClick={() => {
                            setExpanded(false)
                            props.component(<Contact/>)
                        }}><i className="fas fa-address-book"/> Contactez-moi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}