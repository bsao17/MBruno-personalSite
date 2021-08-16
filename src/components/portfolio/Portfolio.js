import React from 'react'
import BgAbout from '../../componenttSVG/BgAbout'
import style from './portfolio.module.scss'
import {Footer} from "../footer/Footer";
import TitlePage from "../TitlePage";

export default function Portfolio(props) {
    return (
        <>
            <br/>
            <br/>
            <br/>
            <BgAbout/>
            <TitlePage title={"Portfolio"}/>
            <div className=" container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center"
                 id={"globalContainer"}
                 data-aos="zoom-out"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000"
            >


                <div
                    id={style.cardone}
                    className="card col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3"
                >
                    <div className={style.definition}>
                        <p>
                            Voici un pure projet d'integration web,
                            cela signifie la reproduction à l'identique d'une maquette réalisée par un designer.
                            Ceci est le travail de base de tout développeur !
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
                        align-items-center">
                        WebAgency
                    </div>
                    <img src="images/sites/agency.jpg"
                         className="w-100 rounded-bottom"
                         alt="agency site"/>
                </div>
                <div
                    className="card col-lg-4 col-md-6 col-12 m-5 p-2 rounded"
                >
                    <div className={style.definition}>
                        <p>
                            L'objectif de celui-ci, est la réalisation d'une SPA pour single page application.
                            Le principe est assez simple en soit, le but étant comme son nom l'indique,
                            de créer une appliction monopage ou tout le code est chargé à la première ouverture du site
                            afin que tout se deroule sur celle ci sans jamais avoir à en changer.
                            Comme une application native sur votre ordinateur mais à travers un navigateur web ou
                            mobile!
                        </p>
                        <a href="https://bsao17.github.io/Project3_OC/">Visiter le site</a>
                    </div>
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        bikeRenting
                    </div>
                    <img src="images/sites/bikeRenting.jpg" className="w-100 rounded-bottom" alt="agency site"/>
                </div>
                <div className="card col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
                    <div className={style.definition}>
                        <p>
                            Voici la création du site de l'office de tourisme de la ville d'Ireki en Alaska, ne la
                            cherchez pas car elle n'existe pas, le but étant ici d'utiliser un CMS (content management
                            system), donc un système de gestion de contenu pour accélérer et faciliter la création.
                            Attention tout de même à l'apparente simplicité trompeuse de ce genre d'outils, entre autre
                            wordpress dans le cas présent
                        </p>
                        <a href="http://devwebdino.fr/">Visiter le site</a>
                    </div>
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        Ireki
                    </div>
                    <img
                        src="images/sites/ireki.jpg"
                        className="w-100 rounded-bottom"
                        alt="agency site"
                    />
                </div>
                <div className="card col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3">
                    <div className={style.definition}>
                        <p>
                            Voici un projet en langage PHP pour le développement du site et mySQL pour la gestion de la
                            base de données. Ce site est celui de l'écrivain Jean Forteroche, qui écrit et distribue son
                            nouveau livre au fur et à mesure par l'intermédiaire de son blog
                        </p>
                        <a href="http://blog-forteroche.devwebdino.com/?action=home">Visiter le site</a>
                    </div>
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        Jean Forteroche
                    </div>
                    <img src="images/sites/forteroche.jpg" className="w-100 rounded-bottom" alt="agency site"/>
                </div>
                <div className="card col-lg-4 col-md-6 col-12 m-5 p-2 rounded-3"
                >
                    <div className={style.definition}>
                        <p>
                            Et celui ci, est mon projet personnel.
                            Le titre en soit est assez claire ! Il vise à tordre le coup aux idées reçus,
                            comme quoi les développeurs juniors (donc débutants) seraient incapables de créer ou de
                            mener à bien un projet en autonomie,
                            en exposant leurs travaux sur ce blog
                        </p>
                        <a href="https://jmpm-e70d2.web.app/">Visiter le site</a>
                    </div>
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        Junior Mais Pas Manchot
                    </div>
                    <img src="images/sites/jmpm.jpg"
                         className="w-100 rounded-bottom" alt="agency site"/>
                </div>
            </div>
            <div className={'d-inline-block w-100'}>
                <Footer/>
            </div>
        </>
    )
}
