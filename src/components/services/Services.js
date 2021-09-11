import React, {Component} from "react";
import {Carousel} from "react-bootstrap";
import {TitlePage, Footer} from "../index";
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
                                <br/>
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
                                    </Carousel.Item>
                                </Carousel>
                                <br/>
                                <div className={serviceStyle.text}>
                                    <span className={serviceStyle.firstLetter}>V</span>oici les services que je propose
                                  pour vous permettre de <strong className={"h5"}>développer votre activité</strong>, augmenter votre <strong className={"h5"}>chiffre
                                  d'affaires</strong>, développer ou <strong className={"h5"}>optimiser</strong> un site ou <strong className={"h5"}>une application</strong>.
                                  Je peux <strong className={"h5"}>prendre en charge</strong> votre projet <strong className={"h5"}>du développement</strong> jusqu’au plan marketing et
                                  <strong> au lancement</strong>.
                                  N’hésitez pas à <strong className={"h5"}>me contacter</strong> pour en discuter et voir ensemble ce qu’il est possible
                                  de faire pour vous.
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-12 m-auto">
                            <div className={serviceStyle.services}>
                                <div className={serviceStyle.card}>
                                    <h3 className={serviceStyle.titleCard}>Application Web</h3>
                                    <span className={serviceStyle.firstLetter}>E</span>n informatique, une application
                                  web est une application
                                  manipulable directement en ligne grâce à un navigateur web et
                                  qui ne nécessite donc pas d'installation sur les machines
                                  clientes, contrairement aux applications mobiles.
                                </div>
                                <div className={serviceStyle.card}>
                                    <h3 className={serviceStyle.titleCard}>Application Mobile</h3>
                                    <span className={serviceStyle.firstLetter}>U</span>ne application mobile est un
                                  logiciel applicatif développé pour
                                  un appareil électronique mobile, tel qu'un assistant personnel,
                                  un téléphone portable, un smartphone, un baladeur numérique, une
                                  tablette tactile, ou encore certains ordinateurs fonctionnant
                                  avec le système d'exploitation Windows Phone ou Chrome OS.
                                </div>
                                <div className={serviceStyle.card}>
                                    <h3 className={serviceStyle.titleCard}>Copywriting</h3>
                                    <span className={serviceStyle.firstLetter}>L</span>e copywriting est l'acte d'écrire
                                  du texte afin de
                                  pousser le lecteur à passer l'action. Un achat, un abonnement, une inscription,
                                  toutes les actions que
                                  vous souhaitez mettre en place peuvent être optimisées et générer, par l'écriture
                                  d'une page de vente,
                                  d'un email commercial, d'une newsletter, des résultats bien au-delà de vos
                                  espérances.
                                  C'est encore aujourd'hui l'outil marketing le pluis puissant, quand-il est fait
                                  correctement bien sûr.
                                </div>
                                <div className={serviceStyle.card}>
                                    <h3 className={serviceStyle.titleCard}>marketing de contenus et de réseau</h3>
                                    <span className={serviceStyle.firstLetter}>L</span>e marketing des médias sociaux
                                  peut
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
