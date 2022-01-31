import {Home, ResponsiveAppBar} from "./components";
import AOS from "aos";
import React, {useState} from "react";
import {useEffect} from "react";

function App() {
    const [component, setComponent] = useState(<Home/>)

    const changeComponent = (C) => {
        setComponent(C)
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div id="App" className={"AppContainer"}>
            <ResponsiveAppBar components={changeComponent}/>
            <div>
                {component}
            </div>
        </div>
    );
}

export default App;
