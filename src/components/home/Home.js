import React, {useEffect, useState} from "react";
import {Footer} from "../index";
import HappyNewYear from "../happyNewYear/HappyNewYear";
import styles from "./home.module.scss"

//just for the testing home.test.js
export function sum(a, b) {
    return a + b
}

export default function Home() {
    // pass true for displaying happy new year
    const [counter, setCounter] = useState(false);
    const [img] = useState("images/yellowWhite.png");


    useEffect(() => {
        setTimeout(() => {
            setCounter(false)
        }, 5000)
    }, [])

    return (
        <div>
            <div id={styles.home}>
                <div
                    id={styles.title}
                    data-aos="fade-right"
                    data-aos-anchor-placement="top-bottom"
                >
                    <p id={styles.firstname}>Bruno</p>
                    <p id={styles.lastname} >MEHDDEB</p>
                    {counter ? <HappyNewYear/> : (
                        <div id={styles.jingle} className="jingle text-dark">
                <span id={styles.activities} className={"card-xs"}>
                  Développement Web,
                  <br/>
                  Développement Mobile, <br/>
                  Conception, réalisation, <br/>
                  Déploiement, mises à jour..
                </span>
                            <hr className="w-75"/>
                            L'Architecte de vos
                            <span className={"text-warning text-md-light"} id={styles.ambition}>
                  {" "}
                                Ambitions
                </span>
                        </div>
                    )}
                </div>
                <img
                    src={img}
                    alt="Création de sites internets et d'applications mobiles en Charente maritime et Nouvelle Aqquitaine"
                    id={styles.background}
                    className="d-xl-block d-lg-block d-none"
                />
            </div>
            <Footer/>
        </div>
    );
}
