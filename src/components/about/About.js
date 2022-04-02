import React, { useState } from "react";
import BgAbout from "../../componenttSVG/BgAbout";
import "aos/dist/aos.css";
import TextSuite from "../textSuite/TextSuite";
import {Footer} from "../index";
import TitlePage from "../TitlePage";
import styles from "./about.module.scss"

export default function About() {
  const [show, setShow] = useState(false)
  const[button, setButton] = useState(true)

  return (
    <div id={styles.container}
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000">
      <div className={styles.globalText}>
        <TitlePage title={"A propos"}/>
        <div
          className={" p-3 rounded bg-light"}
        >
          <div>
            <div className={styles.svg}>
              <BgAbout />
            </div>
            <img
              src={"images/selfiesBW.png"}
              id={styles.selfie}
              className={"mx-3 shadow-lg"}
              data-aos="zoom-in"
              data-aos-delay="1500"
              data-aos-duration="2000"
              alt="selfie"
            />
            <div id={styles.presentaionText}>
              <h2 className={styles.title}>Salut à vous visiteurs.ses,</h2>
              <br />
              <br />
              <span className={styles.firstLetter}>S</span>i vous êtes en train de
              lire ceci, c’est qu'à priori jusqu’ici je n’ai pas trop mal fait mon
              travail,
              <br /> alors si vous le voulez bien essayons de continuer sur notre
              lancée.
              <br />
              <br />
              <span className={styles.firstLetter}>D</span>ans la longue tradition du marchand, la règle de l’art était et est toujours,
              de dire ou d’écrire ce que l’auditeur/lecteur avait envie
              d’entendre ou lire,
              <br />
              Heureusement pour moi, je ne suis ni gourou, ni médium
              mais <strong>un développeur informatique</strong> spécialisé
              web, qui connaît plutôt pas mal la <strong>communication digitale</strong> sur les
              réseaux sociaux (Facebook, Instagram, Twitch etc…) et qui
              <strong> manipule les mots</strong> plutôt correctement.
              <br />
              <br />
              <span className={styles.firstLetter}>A</span>ujourd’hui, force est de constater, que si vous voulez que
              <strong> votre entreprise</strong> ou votre commerce <strong>se développe </strong>, s’affranchisse des
              limites, s’ouvre au monde <strong>et prospère</strong>, alors c'est en grande partie
              <strong> derrière un clavier que cela va ce jouer</strong>.
              <br />
              Vous <strong>souvenez-vous</strong> de cette époque que les moins de 20 ans ne
              peuvent pas connaître, ces années ou lorsqu'on voulait créer un
              évènement, faire une promotion ou simplement informer de son existence,
              il fallait passer par des 4x3 sur les murs, de la pub radio, du
              mailing de boite voir de la pub télé...
              <br />
              <br />
              <span className={styles.firstLetter}>O</span>n <strong>se ruinait</strong> littéralement en attendant que “le sacro-saint
              bouche-à-oreille" daigne montrer le bout de son nez ! <br />
              <br />
              “Ce n’était <strong>pas simple</strong> quant même ... <br />
              <br/>
              <span className={styles.firstLetter}>M</span>ais le Darwinisme a fait son œuvre
              <strong> et de nos jours</strong>, quand on veut acheter une voiture, réserver un
              vélib, appeler un taxi ou faire toiletter son hamster, c’est illico sur
                son mobile ou son ordi qu’on se jette, et <strong>direction Google</strong>, car
              c’est bien connu, <strong>“Google est ton ami !”</strong>. <br />
              <br />
              <img src={"images/aboutPage/google.png"} className={"w-50 d-block m-auto"} alt="Logo de Google"/>
              <br/>
              <h2 className={styles.rules}>Mais au fait, c’est quoi <strong className={'text-primary'}>Google</strong> ? </h2><br />
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
      <Footer/>
    </div>
  );
}
