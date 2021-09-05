import React, {useState} from 'react';
import styleNavBar from "./BigNavBar.module.scss"
import {Nav, Navbar} from "react-bootstrap";
import {About, Contact, Home, Portfolio, WhoIAm, Services} from "../index";

export default function BigNavBar (props){

    return (
        <div>
            <Navbar expand="lg" id="navBar" >
                <Navbar.Brand href="#"><span id="navLogo">MB</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
                <Navbar.Collapse id="basic-navbar-nav" className={"w-25"}>
                    <Nav className="navlink mr-auto">
                        <Nav.Link onClick={()=>{props.component(<Home/>)}}><i className="fas fa-home"/> Accueil</Nav.Link>
                        <Nav.Link onClick={()=>{props.component(<About/>)}}><i className="far fa-address-card"/> A propos</Nav.Link>
                        <Nav.Link onClick={()=>{props.component(<WhoIAm/>)}}><i className="fas fa-male"/> Qui Suis-je</Nav.Link>
                        <Nav.Link onClick={()=>{props.component(<Services/>)}}><i className="fas fa-network-wired"/> Services</Nav.Link>
                        <Nav.Link onClick={()=>{props.component(<Portfolio/>)}}><i className="fas fa-briefcase"/> Portfolio</Nav.Link>
                        <Nav.Link href="https://mehddebbruno.blogspot.com/" ><i className="fab fa-wordpress"/> Blog</Nav.Link>
                        <Nav.Link onClick={()=>{props.component(<Contact/>)}}><i className="fas fa-address-book"/> Contactez-moi</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}