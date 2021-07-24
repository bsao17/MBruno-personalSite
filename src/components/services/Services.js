import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Footer } from "../footer/Footer";
import TitlePage from "../TitlePage";
import serviceStyle from "./services.module.scss";

export default class Services extends Component {
  render() {
    return (
      <>
        <br/>
        <br/>
        <br/>
        <TitlePage title='Services'/>
      <div className={serviceStyle.containerAll}>
        <div className="row w-100 m-auto">
          <div className="col-lg-6 col-md-6 col-12 p-5">
            <div className="service card card-body" id="rightCard">
              <h1 className={serviceStyle.title}>Services</h1>
              <br />
              <Carousel>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src="images/carousel/app-web.jpg"
                    alt=""
                  />
                  <Carousel.Caption>
                    <h1 className={serviceStyle.carouselImage}>
                      App &amp; Site Web
                    </h1>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src="images/carousel/app-mobile.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/carousel/copywriting.png"
                    alt="Third slide"
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <br />
              <div className={serviceStyle.text}>
                <span className={serviceStyle.firstLetter}>J</span>e vous présente ici, les services qui me sont les plus couramment demandés.
                Cette liste est non exhaustive, donc si votre projet ne correspond pas ou n'entre pas entièrement dans le cadre de ce qui est cité,
                c'est absolument normal.
                Je suis avant tout un développeur, donc toutes les idées nouvelles et projets divers seront les bienvenues,
                et abordés comme des challenges et avec tout le sérieux qu'ils méritent !
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-12 m-auto">
            <div className={serviceStyle.services}>
              <div className={serviceStyle.card}>
                <h3 className={serviceStyle.titleCard}>Application Web</h3>
                <span className={serviceStyle.firstLetter}>E</span>n informatique, une application web est une application
                manipulable directement en ligne grâce à un navigateur web et
                qui ne nécessite donc pas d'installation sur les machines
                clientes, contrairement aux applications mobiles.
              </div>
              <div className={serviceStyle.card}>
                <h3 className={serviceStyle.titleCard}>Application Mobile</h3>
                <span className={serviceStyle.firstLetter}>U</span>ne application mobile est un logiciel applicatif développé pour
                un appareil électronique mobile, tel qu'un assistant personnel,
                un téléphone portable, un smartphone, un baladeur numérique, une
                tablette tactile, ou encore certains ordinateurs fonctionnant
                avec le système d'exploitation Windows Phone ou Chrome OS.
              </div>
              <div className={serviceStyle.card}>
                <h3 className={serviceStyle.titleCard}>Copywriting</h3>
                <span className={serviceStyle.firstLetter}>L</span>e copywriting est l'acte ou l'occupation d'écrire du texte à
                des fins de publicité ou d'autres formes de marketing. Le
                produit, appelé copie ou copie de vente, est un contenu écrit
                qui vise à accroître la notoriété de la marque et finalement à
                persuader une personne ou un groupe de prendre une action
                particulière.
              </div>
              <div className={serviceStyle.card}>
                <h3 className={serviceStyle.titleCard}>marketing social</h3>
                <span className={serviceStyle.firstLetter}>L</span>e marketing des médias sociaux peut
                vous aider à bâtir un réseau rempli de clients ou d'acheteurs
                potentiels qui s'intéressent à votre entreprise et ce que vous
                avez à offrir. Ces groupes d'acheteurs ou de clients potentiels
                consultent leurs comptes sociaux 4 à 10 fois par jour.
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
      </>
    );
  }
}
