import React, { useState } from "react";
import Particles from "react-particles-js";
import { Footer } from "../footer/Footer";

export default function Home(props) {
  const [img] = useState("images/yellowWhite.png");
  return (
    <>
      <div id={"home"}>
        <Particles
          id="particles"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <div
          id="title"
          className={"title"}
          data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
        >
          <p id="firstname">Bruno</p>
          <p id="lastname" className={"lastname"}>MEHDDEB</p>
          <div id="jingle" className="jingle text-dark">
            <span id="activities">
              Design,
              <br />
              Copywriting, <br />
              Développement Web,
            </span>
            <hr className="w-75" />
            L'Architecte de vos
            <span className={"text-warning text-md-light"} id={"ambition"}>
              {" "}
              Ambitions
            </span>
          </div>
        </div>
        <img
          src={img}
          alt="background"
          id="background"
          className="d-xl-block d-lg-block d-none"
        />
      </div>
      <Footer/>
    </>
  );
}
