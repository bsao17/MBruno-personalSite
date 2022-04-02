import React, {useEffect, useState} from "react";
import AOS from "aos";
import Navigation from "./components/navigation/Navigation";
import styles from "./components/navigation/navigation.module.scss";

const comeBackUp = {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    border: "solid white 2px",
    borderRadius: "50%",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    cursor: "pointer",
    zIndex: "10000"
}

function App() {
    const ascend = () => {
        window.scroll(0, 0)
    }

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div>
            <Navigation/>
            <div onClick={ascend} style={comeBackUp}>Up</div>
        </div>
    );
}

export default App;
