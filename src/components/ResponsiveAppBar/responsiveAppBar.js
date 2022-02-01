import React, {useEffect, useState} from 'react';
import {About, Contact, Home, Portfolio, WhoIAm, Services} from "../index";
import styles from './responsiveAppBar.module.scss'

export default function ResponsiveAppBar({components}) {
    let [expanded, setExpanded] = useState(false);

    return (
        <div className={styles.container}>
            <nav className="navbar  navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={"./images/logo/mb.png"} className={styles.logo} alt="logo"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded={"false"}
                            aria-label="Toggle navigation"
                            onClick={() => {
                                setExpanded(true)
                            }}
                    >
                        <span className="navbar-toggler-icon"/>menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className={expanded ? "navbar-nav" : "collapse"}>
                            <a className="nav-link active" aria-expanded="false" id={styles.links} aria-current="page"
                               onClick={() => {
                                   setExpanded(false)
                                   components(<Home/>)
                               }}>Home</a>
                            <a className="nav-link" id={styles.links} onClick={() => {
                                setExpanded(false)
                                components(<About/>)
                            }}>About</a>
                            <a className="nav-link" id={styles.links} onClick={() => {
                                setExpanded(false)
                                components(<WhoIAm/>)
                            }}>Qui suis-je</a>
                            <a className="nav-link" id={styles.links} onClick={() => {
                                setExpanded(false)
                                components(<Services/>)
                            }}>Services</a>
                            <a className="nav-link" id={styles.links} onClick={() => {
                                setExpanded(false)
                                components(<Portfolio/>)
                            }}> Portfolio </a>
                            <a className="nav-link" id={styles.links} onClick={() => {
                                setExpanded(false)
                                components(<Contact/>)
                            }}> Contact </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}