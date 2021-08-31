import React from "react";

export default function Details() {
  return (
    <div className="card card-body border-0 d-flex flex-row flex-wrap justify-content-center align-items-center p-5 mx-5 bg-warning rounded">
      <div
        id="adress"
        className="col-md-3 mx-2 card card-body text-center rounded border-0"
      >
        <h1>
          <i className="fas fa-envelope-open-text"/>
        </h1>
        <p>
          <span>
            <a href="mailto:contact@mehddebbruno.com" style={{textDecoration: "none", fontSize: "1rem",color: "black", fontWeight: "bold"}} >contact@mehddebbruno.com</a>
          </span>
        </p>
      </div>

      <div
        id="tel"
        className="col-md-3 mx-2 w-100 card card-body text-center rounded border-0"
      >
        <h1>
          <i className="fas fa-phone"/>
        </h1>
        <p>
          <span className="d-block px-2 " style={{fontSize: "1rem", fontWeight: "bold"}}>
            +33 (0)7 52 07 30 25
          </span>
        </p>
      </div>

      <div
        id="web"
        className="col-md-3 mx-2 card card-body text-center rounded border-0"
      >
        <h1>
            <a href="https://www.facebook.com/devwebdino">
                <i className="fab fa-facebook"/>
            </a>
        </h1>

      </div>
    </div>
  );
}
