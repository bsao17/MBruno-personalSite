import React, {useEffect} from "react";
import {About, Contact, Home, Portfolio, WhoIAm} from "./components";
import AOS from "aos";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";


function App() {

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Navigation/>
        </div>
        // <Router>
        //     <div>
        //         <li><Link to={"/"}>Home</Link></li>
        //         <li><Link to={"/about"}>About</Link></li>
        //         <li><Link to={"/whoiam"}>Who I Am</Link></li>
        //         <li><Link to={"/portfolio"}>Portfolio</Link></li>
        //         <li><Link to={"/contact"}>Contact</Link></li>
        //     </div>
        //     {/* Link list */}
        //     <Switch>
        //         <Route exact path="/">
        //             <Home/>
        //         </Route>
        //         <Route path="/about">
        //             <About/>
        //         </Route>
        //         <Route path="/whoiam">
        //             <WhoIAm/>
        //         </Route>
        //         <Route path="/portfolio">
        //             <Portfolio/>
        //         </Route>
        //         <Route path="/contact">
        //             <Contact/>
        //         </Route>
        //     </Switch>
        // </Router>
    );
}

export default App;
