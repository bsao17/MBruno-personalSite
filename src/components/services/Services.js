import React, { Component } from "react";
import serviceStyle from "./services.module.scss";

export default class Services extends Component {
  render() {
    return (
      <div className={serviceStyle.containerAll}>
        <div className="row w-100 m-auto">
          <div className="col-lg-6 col-md-6 col-12 p-5">
            {/* <img src="https://www.thispersondoesnotexist.com/image" alt="" className="d-block m-auto w-75 rounded my-5"/> */}
            <div className="service">
              <h1 className={serviceStyle.title}>Services</h1>
              <br />
              <div className={serviceStyle.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                numquam quidem illum maiores delectus rem adipisci dolorum at
                vitae, laborum quam quibusdam eum dignissimos, in officiis saepe
                esse voluptate? Voluptatum dicta ad, corrupti, nam laborum
                fugiat sint fugit enim vitae ullam dolor? Commodi debitis
                sapiente repellat perspiciatis impedit expedita dolores.
              </div>
            </div>
          </div>
          <div className="w-50 col-lg-6 col-md-4 col-12 m-auto">
            <div className={serviceStyle.services}>
              <div className={serviceStyle.card}>
                <h5 className="h3">Application Web</h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                numquam quidem illum maiores delectus rem adipisci dolorum at
                vitae?
              </div>
              <div className={serviceStyle.card}>
                <h5 className="h3">Application Mobile</h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                numquam quidem illum maiores delectus rem adipisci dolorum at
                vitae?
              </div>
              <div className={serviceStyle.card}>
                <h5 className="h3">Copywriting</h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                numquam quidem illum maiores delectus rem adipisci dolorum at
                vitae?
              </div>
              <div className={serviceStyle.card}>
                <h5 className="h3">marketing social</h5>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                numquam quidem illum maiores delectus rem adipisci dolorum at
                vitae?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
