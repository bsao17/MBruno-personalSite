import React, {useEffect, useState} from "react";
import { Footer } from "../index";
import HappyNewYear from "../happyNewYear/HappyNewYear";

export default function Home() {
  // pass true for displaying happy new year
  const [counter, setCounter] = useState(false);
  const [img] = useState("images/yellowWhite.png");


  useEffect(()=>{
    setTimeout(()=>{
      setCounter(false)
    }, 5000)
  }, [])

  return (
      <div>
          <div id={"home"}>
            <div
              id="title"
              className={"title"}
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
            >
              <p id="firstname">Bruno</p>
              <p id="lastname" className={"lastname"}>MEHDDEB</p>
              {counter ? <HappyNewYear/> : (
                  <div id="jingle" className="jingle text-dark">
                <span id="activities" className={"card-xs"}>
                  Développement Web,
                  <br />
                  Développement Mobile, <br />
                  Conception, réalisation, <br/>
                  Déploiement, mises à jour..
                </span>
                    <hr className="w-75" />
                    L'Architecte de vos
                    <span className={"text-warning text-md-light"} id={"ambition"}>
                  {" "}
                      Ambitions
                </span>
                  </div>
              )}
            </div>
            <img
              src={img}
              alt="Création de sites internets et d'applications mobiles en Charente maritime et Nouvelle Aqquitaine"
              id="background"
              className="d-xl-block d-lg-block d-none"
            />
          </div>
          <Footer/>
      </div>
  );
}
