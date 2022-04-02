import React from "react";
import styles from "./navigation.module.scss"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {About, Contact, Home, Portfolio, WhoIAm} from "../index";

export default function Navigation() {
    const [responsiveMenu, setResponsiveMenu] = React.useState(true)
    const mobileMenuShow = () => {
        setResponsiveMenu(!responsiveMenu)
    }
    console.log(responsiveMenu)
    return (
        <Router>
            <div className={responsiveMenu ? styles.closed : styles.closedShow} onClick={mobileMenuShow}>X</div>
            <div className={responsiveMenu ? styles.button : styles.buttonShow} onClick={mobileMenuShow}>
                <div className={styles.trait}/>
                <div className={styles.trait}/>
                <div className={styles.trait}/>
            </div>
            <div className={styles.container}>
                <ul className={responsiveMenu ? styles.navLink : styles.navLinkShow}>
                    <li><Link to={"/"}>Accueil</Link></li>
                    <li><Link to={"/about"}>A propos</Link></li>
                    <li><Link to={"/whoiam"}>Qui suis-je</Link></li>
                    <li><Link to={"/portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/contact"}>Contactez-moi</Link></li>
                </ul>
            </div>
            {/* Link list */}
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/whoiam">
                    <WhoIAm/>
                </Route>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}