import React, { useState } from "react";
import BgAbout from "../componenttSVG/BgAbout";
import "aos/dist/aos.css";
import TextSuite from "./TextSuite";

export default function About() {
  const [show, setShow] = useState(false)
  const[button, setButton] = useState(true)

  return (
    <div id="about" 
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <br className={"spacing"} />
      <br className={"spacing"} />
      <br className={"spacing"} />
      <div>
        <h4 className={"text-center text-dark"} id={"aboutTitle"}>
          A propos
        </h4>
        <div
          className="d-flex align-items-center justify-content-center"
          id={"trait"}
        >
          <div
            id={"leftTrait"}
            className={"rounded-pill border border-4 w-50"}
          />
          <div
            id={"roundCenter"}
            className={"rounded-circle border p-2 bg-dark mx-auto"}
          />
          <div
            id={"rightTrait"}
            className={"rounded-pill border border-4 w-50"}
          />
        </div>
        <br className={"spacing"} />
        <div
          className={"container p-3 rounded bg-light"}
          id={"presentationText"}
        >
          <div>
            <BgAbout  />
            <img
              src="images/selfiesBW.png"
              id={"selfie"}
              className={"mx-3 shadow-lg"}
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="2000"
              alt=""
            />
            <div id="presentationText">
              <span className="h5">Salut à vous visiteur.se,</span>
              <br />
              <br />
              <span id="firstLetter" className="h4 text-warning">S</span>i vous êtes en train de
              lire ceci, c’est qu'à priori jusqu’ici je n’ai pas trop mal fait mon
              travail,
              <br /> alors si vous le voulez bien essayons de continuer sur notre
              lancée.
              <br />
              <br /> Dans la longue tradition du marchand, la règle de l’art était et est toujours, 
              de dire ou d’écrire ce que l’auditeur/lecteur avait envie
              d’entendre ou lire,
              <br />
              <br />
              Heureusement pour moi, je ne suis ni gourou ou médium, 
              mais un développeur informatique spécialisé
              web, qui connaît plutôt pas mal la communication digitale sur les
              réseaux sociaux (Facebook, Instagram, Twitch etc…).
              <br />
              <br /> Aujourd’hui, force est de constater, que si vous voulez que
              votre entreprise ou votre commerce se développe, s’affranchisse des
              limites, s’ouvre au monde et prospère, alors c'est en grande partie 
              derrière un clavier que cela va ce jouer.
              <br />
              <br /> Vous souvenez vous de cette époque que les moins de 20 ans ne
              peuvent pas connaître, ces années ou lorsqu'on voulait créer un
              évènement, faire une promotion ou simplement informer de son existence,
              il fallait passer par des 4x3 sur les murs, de la pub radio, du
              mailing de boite voir de la pub télé...
              <br />
              <br /> On se ruinait littéralement en attendant que “le sacro-saint
              bouche-à-oreille" daigne montrer le bout de son nez ! <br />
              <br />
              “Ce n’était pas simple quant même ... <br />
              Mais le Darwinisme a fait son œuvre et tout a évolué”.
              <br />
              <br /> De nos jours, quand on veut acheter une voiture, réserver un
              vélib, appeler un taxi ou faire toiletter son hamster, c’est illico sur
              son mobile ou son ordi qu’on se jette, et direction Google, car
              c’est bien connu, “Google est ton ami !”. <br />
              <br />
              <span className="rules">Mais au fait, c’est quoi Google ? </span><br />
              <br />
            </div>

          <button onClick={
              ()=>{
                setShow(!show)
                setButton(!button)
              }
            } className="btn btn-sm btn-warning rounded-pill px-5">{button ? 'Lire la suite' : 'Fermer'}</button>
            
            {show && <TextSuite/>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
