import React from "react";
import styles from "./navigation.module.scss"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {About, Contact, Home, Portfolio, WhoIAm} from "../index";

export default function Navigation(){
    const [scroll] = React.useState(window.scrollY)

    return (
        <Router>
            <div className={styles.button}>
                <div className={styles.trait}/>
                <div className={styles.trait}/>
                <div className={styles.trait}/>
            </div>
            <div className={styles.container}>
                <ul className={styles.navLink}>
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