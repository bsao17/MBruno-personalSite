import React, {useState} from 'react'
import BgAbout from '../../componenttSVG/BgAbout'
import style from './portfolio.module.scss'

export default function Portfolio(props) {
    const[data, setData] = useState()

    let item;
    let globalContainer;

    const showData = (d) => {
        item = document.createElement('div')
        item.className = style.modale
        item.innerHTML = d
        globalContainer = document.getElementById('globalContainer')
        const modale = globalContainer.appendChild(item)
        return modale
    }

    const removeData = ()=>{
        try{
            globalContainer.removeChild(item)
        }catch {
            console.error('erreur nodeChild')
        }
    }

    return (
        <>
            <br/>
            <div className=" container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center"
                 id={"globalContainer"}
                 style={{height: "100vh"}}
                 data-aos="zoom-out"
                 data-aos-easing="ease-out-cubic"
                 data-aos-duration="2000"
            >
                <BgAbout/>
                <div onMouseEnter={()=> showData("Voici un pure projet d'integration, cela signifie la reproduction à l'identique d'une maquette réalisée par un designer, en site internet.Ceci est le travail initial d'un développeur web !")}
                     onMouseLeave={removeData}
                     id={'cardOne'}
                     className=" card col-lg-3 col-md-6 col-12 m-1 rounded-3"
                >

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
                    <a href="https://bsao17.github.io/webAgency/">
                        <img src="images/sites/agency.jpg"
                             className="w-100"
                             alt="agency site"/>
                    </a>
                </div>
                <div onMouseEnter={()=> showData("L'objectif de ce projet est la réalisation d'une SPA pour single page application.Le principe est assez simple en soit, le but comme son nom l'indique, est de créer une appliction monopage ou tout se deroule sur celle ci sans jamais avoir à en changer.Sorte  Comme une application native sur votre ordinateur ou mobile!")}
                     onMouseLeave={removeData}
                    className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        bikeRenting
                    </div>
                    <a href="https://bsao17.github.io/Project3_OC/" target="blank"><img
                        src="images/sites/bikeRenting.jpg" className="w-100" alt="agency site"/></a>
                </div>
                <div onMouseEnter={()=> showData("Voici la création du site de l'office de tourisme de la ville d'Ireki en Alaska, ne la cherchez pas car elle n'existe pas, le but étant ici d'utiliser un CMS (content management system), donc un système de gestion de contenu pour accélérer et faciliter la création. Attenntion tout de même à l'apparente simplicité trompeuse de ce genre d'outils, entre autre wordpress dans le cas présent")}
                     onMouseLeave={removeData}
                    className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        Ireki
                    </div>
                    <a href="http://devwebdino.fr/"
                       target="blank"><img
                        src="images/sites/ireki.jpg"
                        className="w-100"
                        alt="agency site"/>
                    </a>
                </div>
                <div onMouseEnter={()=> showData("Ici vous découvrirez un projet en pure PHP et mySQL. Ce site est celui de l'écrivain Jean Forteroche, qui écrit et distribue son nouveau livre par l'intermédiaire de son blog")}
                     onMouseLeave={removeData}
                    className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        Jean Forteroche
                    </div>
                    <a href="http://blog-forteroche.devwebdino.com/?action=home" target="blank"><img
                        src="images/sites/forteroche.jpg" className="w-100" alt="agency site"/>
                    </a>
                </div>
                <div onMouseEnter={()=> showData("Celui ci, est un projet personnel.Le titre est assez évocateur et claire, il vise à tordre le coup aux idées reçus, comme quoi les développeurs juniors seraient incapables de mener à bien un projet, en les exposant sur ce blog")}
                     onMouseLeave={removeData}
                    className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                    <div
                        className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                        Junior Mais Pas Manchot
                    </div>
                    <a href="https://jmpm-e70d2.web.app/" target="blank">
                        <img src="images/sites/jmpm.jpg"
                             className="w-100" alt="agency site"/>
                    </a>
                </div>
            </div>
        </>
    )
}
