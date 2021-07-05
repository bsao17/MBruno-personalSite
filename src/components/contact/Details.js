import React from 'react'

export default function Details() {
    return (
        <div className="card card-body border-0 d-flex flex-row flex-wrap justify-content-center align-items-center p-5 mx-5 bg-warning rounded-pill" >
            <div id="adress" className="col-md-3 mx-2 card card-body text-center rounded-pill border-0">
                <h1><i className="fas fa-envelope-open-text"></i></h1>
                <p>Contact par mail à : <a href="mailto:meh.bruno@yahoo.com">meh.bruno@yahoo.com</a></p>
                <p>Ou formulaire ci-dessous</p>
            </div> 

            <div id="tel" className="col-md-3 mx-2 card card-body text-center rounded-pill border-0">
                <h1><i className="fas fa-phone"></i></h1>   
                <p>Contact par téléphone au : <span className="text-light bg-success rounded-pill px-2 ">+33 (0)6 12 34 56 78</span></p>
                <p>Ligne en cours d'installation</p>
            </div>

            <div id="web" className="col-md-3 mx-2 card card-body text-center rounded-pill border-0">
                <h1><i className="fab fa-facebook"></i></h1>
                <p>Ou visiter ma page Facebook en cliquant :</p>
                <a className="bg-primary w-25 m-auto rounded-pill" href="https://www.facebook.com/devwebdino"><i className="fab fa-facebook text-light"> ici</i></a>
            </div>    
        </div>
    )
}
