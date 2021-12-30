import React from "react";
import BgAbout from "../../componenttSVG/BgAbout";
import style from "./portfolio.module.scss";
import { Footer } from "../index";
import TitlePage from "../TitlePage";

export default function Portfolio(props) {
  return (
    <>
      <BgAbout />
      <TitlePage title={"Portfolio"} />
      <div
        className=" container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center"
        id={"globalContainer"}
        data-aos="zoom-out"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {/* WebAgency */}
        <div
          id={style.cardone}
          className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3"
        >
          <div className={style.definition}>
            <p className={style.p}>
              Voici un pure projet d'integration web, cela signifie la
              reproduction à l'identique d'une maquette réalisée par un
              designer. Ceci est le travail de base de tout développeur !
            </p>
            <a href="https://bsao17.github.io/webAgency/">Visiter le site</a>
          </div>
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center
                        align-items-center
                        mx-2
                        align-items-center"
          >
            WebAgency
          </div>
          <img
            src="images/sites/agency.jpg"
            className="w-100 rounded-bottom"
            alt="agency site"
          />
        </div>
        {/* BikeRenting Vanilla Javascript */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded">
          <div className={style.definition}>
            <p className={style.p}>
              L'objectif de celui-ci, est la réalisation d'une SPA pour single
              page application. Le principe est assez simple en soit, le but
              étant comme son nom l'indique, de créer une appliction monopage ou
              tout le code est chargé à la première ouverture du site afin que
              tout se deroule sur celle ci sans jamais avoir à en changer. Comme
              une application native sur votre ordinateur mais à travers un
              navigateur web ou mobile!
            </p>
            <a href="https://bsao17.github.io/Project3_OC/">Visiter le site</a>
          </div>
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center"
          >
            Agence de location de vélos - SPA - Javascript
          </div>
          <img
            src="images/sites/bikeRenting.jpg"
            className="w-100 rounded-bottom"
            alt="agency site"
          />
        </div>
        {/* Ireki */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
          <div className={style.definition}>
            <p className={style.p}>
              Voici la création du site de l'office de tourisme de la ville
              d'Ireki en Alaska, ne la cherchez pas car elle n'existe pas, le
              but étant ici d'utiliser un CMS (content management system), donc
              un système de gestion de contenu pour accélérer et faciliter la
              création. Attention tout de même à l'apparente simplicité
              trompeuse de ce genre d'outils, entre autre wordpress dans le cas
              présent
            </p>
            <a href="http://devwebdino.fr/">Visiter le site</a>
          </div>
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-25
                        align-items-center"
          >
            Ireki
          </div>
          <img
            src="images/sites/ireki.jpg"
            className="w-100 rounded-bottom"
            alt="agency site"
          />
        </div>
        {/* Jean Forteroche */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
          <div className={style.definition}>
            <p className={style.p}>
              Voici un projet en langage PHP pour le développement du site et
              mySQL pour la gestion de la base de données. Ce site est celui de
              l'écrivain Jean Forteroche, qui écrit et distribue son nouveau
              livre au fur et à mesure par l'intermédiaire de son blog
            </p>
            <a href="http://blog-forteroche.devwebdino.com/?action=home">
              Visiter le site
            </a>
          </div>
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center"
          >
            Jean Forteroche
          </div>
          <img
            src="images/sites/forteroche.jpg"
            className="w-100 rounded-bottom"
            alt="agency site"
          />
        </div>
        {/* Junior mais pas manchot */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
          <div className={style.definition}>
            <p className={style.p}>
              Et celui ci, est mon projet personnel. Le titre en soit est assez
              claire ! Il vise à tordre le coup aux idées reçus, comme quoi les
              développeurs juniors (donc débutants) seraient incapables de créer
              ou de mener à bien un projet en autonomie, en exposant leurs
              travaux sur ce blog
            </p>
            <a href="https://jmpm-e70d2.web.app/">Visiter le site</a>
          </div>
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center"
          >
            Junior Mais Pas Manchot
          </div>
          <img
            src="images/sites/jmpm.jpg"
            className="w-100 rounded-bottom"
            alt="agency site"
          />
        </div>
        {/* BikeRenting react */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
          <div className={style.definition}>
            <p className={style.p}>
              Reprise du projet de location de vélos, mais cette fois ci,
              réalisé avec <strong>ReactJS</strong>, <strong>Typescript</strong>{" "}
              et <strong>Bootstrap 5</strong>.<br />
              <strong>React</strong> est un framework destiné à la réalisation
              de sites web et d'interface utilisateur aussi appelé UI pour User
              Interface.,
              <strong>Typescript</strong> est un langage de programmation
              orienté objet à typage statique pour plus de sécurité durant le
              développement, et <strong>Bootstrap </strong>
              est un Framework de mise en page. Ces outils permettent de faire
              des sites web dynamiques, mieux structurés, sécurisés, et plus
              facilement modifiables ou maintenables.
              <br />
              <a
                className="w-100 m-auto"
                href="https://bikerenting-c296d.web.app/"
              >
                Visiter le site
              </a>
            </p>
          </div>
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center"
          >
            Agence de location de vélos - React - Typescript
          </div>
          <img
            src="images/sites/bikeRentingReact.jpg"
            className="w-100 rounded-bottom"
            alt="agence de location de vélos"
          />
        </div>
        {/* Calculatrice casio Fx-82 */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center"
          >
            Calculatrice vintage réalisée avec Python et Qtdesigner
          </div>
          <iframe
            className="w-100"
            height={"315"}
            src="https://www.youtube.com/embed/M9AK9MVjNC0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="text-center">
            <a href="https://github.com/bsao17/casio_fx82_Python_PyQt5">
              Aller sur le repository Github
            </a>
          </div>
        </div>

        {/* Application mobile movieApp */}
        <div className="card border-0 col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
          <div
            className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center"
          >
            Application mobile réalisée avec React Native
          </div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WlrjjdBscD4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="text-center">
            <a href="https://github.com/bsao17/MovieChoices">
              Aller sur le repository Github
            </a>
          </div>
        </div>
      </div>
      <div className={"d-inline-block w-100"}>
        <Footer />
      </div>
    </>
  );
}
