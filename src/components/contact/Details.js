import React from "react";

export default function Details() {
  return (
    <div className="card card-body border-0 d-flex flex-row flex-wrap justify-content-center align-items-center p-5 mx-5 bg-warning rounded-pill">
      <div
        id="adress"
        className="col-md-3 mx-2 card card-body text-center rounded-pill border-0"
      >
        <h1>
          <i className="fas fa-envelope-open-text"/>
        </h1>
        <p>
          <span className="bg-success fw-bold p-1 rounded-pill">
            <a href="mailto:contact@mehddebbruno.com" style={{textDecoration: "none", fontSize: "1.2rem",color: "white", fontWeight: "bold"}} >contact@mehddebbruno.com</a>
          </span>
        </p>
      </div>

      <div
        id="tel"
        className="col-md-3 mx-2 card card-body text-center rounded-pill border-0"
      >
        <h1>
          <i className="fas fa-phone"/>
        </h1>
        <p>
          <span className="d-block w-75 m-auto text-light bg-success rounded-pill px-2 " style={{fontSize: "1.2rem", fontWeight: "bold"}}>
            +33 (0)7 52 07 30 25
          </span>
        </p>
      </div>

      <div
        id="web"
        className="col-md-3 mx-2 card card-body text-center rounded-pill border-0"
      >
        <h1>
          <i className="fab fa-facebook"/>
        </h1>
        <span className="d-block w-75 m-auto text-light bg-primary rounded-pill " style={{fontSize: "1.2rem", fontWeight: "bold"}}>
            <a href="https://www.facebook.com/devwebdino">
              <i className="fab fa-facebook text-light fw-bold"> ici</i>
            </a>
          </span>
      </div>
    </div>
  );
}
