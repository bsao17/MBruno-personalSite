import React from "react";
import styles from "./navigation.module.scss"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {About, Contact, Home, Portfolio, WhoIAm} from "../index";
import {gsap} from "gsap"

export default function Navigation() {
    const [responsiveMenu, setResponsiveMenu] = React.useState(true)
    const modaleMenu = React.useRef(null)
    const mobileMenuShow = () => {
        setResponsiveMenu(!responsiveMenu)
    }

    React.useEffect(() => {
        if (window.matchMedia("(max-width: 600px)").matches) {
            if (responsiveMenu === false) {
                gsap.to(modaleMenu.current, {translateY: "100%"})
            } else {
                gsap.to(modaleMenu.current, {translateY: "-100%"})
            }
        }
    }, [responsiveMenu])

    return (
        <Router>
            <h1 className={responsiveMenu ? styles.closed : styles.closedShow} onClick={mobileMenuShow}>✕</h1>
            <div className={responsiveMenu ? styles.button : styles.buttonShow} onClick={mobileMenuShow}>
                <div className={styles.trait}/>
                <div className={styles.trait}/>
                <div className={styles.trait}/>
            </div>
            <div className={styles.container}>
                <ul ref={modaleMenu} className={responsiveMenu ? styles.navLink : styles.navLinkShow}>
                    <li><Link to={"/"}><h2>🛖</h2></Link></li>
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