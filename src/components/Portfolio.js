import React from 'react'
import BgAbout from '../componenttSVG/BgAbout'

export default function Portfolio(props) {
    
    return (
        <>
        <br/>
        <div className=" container-fluid d-flex flex-row flex-wrap justify-content-center align-items-center"
        style={{height: "100vh"}}
        data-aos="zoom-out"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        >
            <BgAbout/>
            <div className=" card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                <div 
                    className="
                        d-flex 
                        flex-column  
                        justify-content-center
                        align-items-center  
                        mx-2
                        align-items-center" >
                    WebAgency
                    </div>
                    <a href="https://bsao17.github.io/webAgency/" target="blank"><img src="images/sites/agency.jpg" className="w-100" alt="agency site"/></a>
            </div>
            <div className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                <div 
                    className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center">
                    bikeRenting
                    </div>
                    <a href="https://bsao17.github.io/Project3_OC/" target="blank"><img src="images/sites/bikeRenting.jpg" className="w-100" alt="agency site"/></a>
            </div>
            <div className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                <div 
                    className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center" >
                    Ireki
                    </div>
                    <a href="http://devwebdino.fr/" target="blank"><img src="images/sites/ireki.jpg" className="w-100" alt="agency site"/></a>
            </div>
            <div className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                <div 
                    className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center" >
                    Jean Forteroche
                    </div>
                    <a href="http://blog-forteroche.devwebdino.com/?action=home" target="blank"><img src="images/sites/forteroche.jpg" className="w-100" alt="agency site"/></a>
            </div>
            <div className="card col-lg-3 col-md-6 col-12 m-1 rounded-3">
                <div 
                    className="
                        d-flex 
                        flex-column  
                        justify-content-center  mx-2
                        align-items-center" >
                    Junior Mais Pas Manchot
                    </div>
                    <a href="https://jmpm-e70d2.web.app/" target="blank"><img src="images/sites/jmpm.jpg" className="w-100" alt="agency site"/></a>
            </div>
        </div>
        </>
    )
}
