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
    );
}

export default App;
