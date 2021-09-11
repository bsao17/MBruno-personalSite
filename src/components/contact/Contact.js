import React from "react";
import Details from "./Details";
import Map from "./Map";
import {Footer} from "../index";
import TitlePage from "../TitlePage";

export default function Contact() {

  return (
    <>
      <br />
      <br />
      <br />
        <TitlePage title={"Contact"}/>
      <div
        className="d-flex align-items-center justify-content-center flex-wrap"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Details />
        <div className="col-6">
          <br />
          <br />
          <section
            className="d-flex flex-column align-items-start justify-content-center w-75 m-auto"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <h2 className={"text-center"}>Contactez-moi</h2>

            <form action="https://api.web3forms.com/submit" method="POST" className="d-flex flex-column w-100 form-group">
              <input
                type="hidden"
                name="apikey"
                value={window.env.API_MAIL}
              />

              <input type="text" name="lastname" placeholder="Nom*" className="form-control m-1" required />
              <input type="text" name="firstname" placeholder="Prénom*" className="form-control m-1" required />
              <input type="email" name="email" placeholder="Email*" className="form-control m-1 " required />
              <input type="text" name="title" placeholder="Titre" className="form-control m-1" required />
              <textarea name="message" placeholder="Message" className="form-control m-1" required/>
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />

              <input type="submit" value={"Envoyer"} className="btn btn-sm btn-success m-3 "/>
            </form>
          </section>
        </div>
        <hr />
        <div
          className="col-md-6 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <img
            src="images/contact.jpg"
            alt="phone"
            style={{
              width: "90%",
              boxShadow: "grey 5px 5px 10px",
              borderRadius: "5%",
            }}
          />
        </div>
      </div>
      <div className={"container"}>
        <Map />
      </div>
        <br/>
        <Footer/>
    </>
  );
}
