import React from 'react';
import {Footer, TitlePage} from "../index";
import whoIAm from "./whoIAm.module.scss"
import BgAbout from "../../componenttSVG/BgAbout";

export default function WhoIAm (props) {

    return (
        <div
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
        >
            <BgAbout />
            <TitlePage title={"Qui suis-je"} />
            <div className={"container card card-body m-auto"}>
                <h2 className={whoIAm.title}>Nous-y voilà, qui suis-je ...</h2>
                <section>
                    <hr className={"w-50 m-auto mt-5 mb-5"}/>
                    <div className={whoIAm.presentation}>
                        <img className={whoIAm.selfie} src={"images/selfieBW.jpg"} alt="selfie de bruno développeur de Charente Maritime"/>
                        <h5><span className={whoIAm.firstLetter}>E</span>n v'là une question qu'elle est difficile... </h5>
                        Non pas que ma vie soit trépidante à ce point là,<br/> mais soit je vous déballe mon CV et dans ce cas là ça ne mérite pas forcément une page
                        spéciale sur mon "superbe" site 😊 en <span className={"h5 fw-bold"}>React</span>,<br/> ou alors je vous la raconte en-y mettant un peu
                        de fantaisies au risque que la longueur du texte* vous fasse fuir à bras raccourcis !!!
                        <br/><br/>
                        <h6 className={'fw-bold'}>Bon et si on essayait un peu des deux, qu'en pensez vous ?</h6>
                        <span className={whoIAm.firstLetter}>J</span>e m’appel Bruno, j’ai 47 ans et presque toutes mes dents,
                        je suis développeur informatique, et développeur Web en Charente Maritime et en Nouvelle Aquitaine.
                        <br/>
                        Si je paraphrase ma présentation LinkedIn,  l’homme de vitruve de Léonard De Vinci serait vraiment le personnage qui représente le plus
                        mon parcours personnel et professionnel ...

                        J’ai de nombreuses passions, comme le parapente, la plongée, le développement informatique, le marketing
                        mais aussi le bricolage et plus particulièrement le recyclage que j’ai découvert durant deux ans
                        au sein de la Glanerie du Moulin à Pons.
                        <br/><br/>
                        <span className={whoIAm.firstLetter}>L</span>’avenir de la planète, le respect des animaux et les valeurs sociales comptent énormément dans ma vie,
                        Je suis issu du milieu ouvrier et j’en suis très fière, j’ai aussi eu l’occasion de  m'épanouir
                        professionnellement en créant deux entreprises entre 2000 et 2016.
                        <br/>
                        J’ai connu le succès, mais aussi l’échec, la descente aux enfers, on m’a spolié, malmené, menacé,
                        traîné dans la boue et renvoyé plus bas que terre.
                        Mais après avoir traversé ce désert fastidieux mais très formateur, je pense avoir enfin trouvé ma voie,
                        ce pour quoi je suis doué, mon job, mon crédo, mon dada …
                        <br/><br/>
                        <span className={whoIAm.firstLetter}>D</span>ans mon ancienne activité, j’aidais les artisans et commerçants à se développer économiquement
                        grâce aux moyens de communications et aux nouvelles technologies.
                        Je développais leur site internet et je mettais en place la stratégie de marketing qui leur permettraient
                        de faire connaître leur entreprise, lancer un nouveau produit ou une nouvelle marque.
                        <br/>
                        Après ces années difficiles, ce monde technologique avait complètement changé, ils s’était étoffé,
                        amélioré mais aussi grandement complexifié, j'ai donc décidé à <strong>45 ans</strong> de retourner sur les bancs de l’école
                        pour passer un Bac+2 en développement Web et mobile afin de me remettre en selle.
                        <br/>
                        <h5>Et voilà où j'en suis aujourd’hui,</h5>

                        <span className={whoIAm.firstLetter}>D</span>onc si vous cherchez à créer votre site internet, optimiser un site existant, créer une application mobile
                        ou développer votre stratégie marketing en <strong className={"h5"}>Charente Maritime</strong>, <strong className={"h5"}>Nouvelle Aquitaine</strong> ou ailleurs …
                        <br/><br/>
                        <span className={whoIAm.firstLetter}>A</span>lors je suis votre homme,
                    </div>
                </section>

            </div>
            <br/>
            <section className={whoIAm.sources}><span className={"h5"}>*</span>
                Les études récentes montrent que sur un texte long comme un article par exemple, les visiteurs ne lisent pour la plupart
                que les gros titres ainsi que les deux ou trois premières lignes mais ne vont rarement plus loin.
                On appelle cela, la lecture transversale.
            </section>
            <Footer/>

        </div>
    );
}