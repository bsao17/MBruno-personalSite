import React, { Component } from "react";
import {Carousel} from 'react-bootstrap'
import serviceStyle from "./services.module.scss";

export default class Services extends Component {
  render() {
    return (
      <div className={serviceStyle.containerAll}>
        <div className="row w-100 m-auto">
          <div className="col-lg-6 col-md-6 col-12 p-5">
            {/* <img src="https://www.thisvpersondoesnotexist.com/image" alt="" className="d-block m-auto w-75 rounded my-5"/> */}
            <div className="service card card-body" id="rightCard">
              <h1 className={serviceStyle.title}>Services</h1>
              <br />
              <Carousel>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src="https://loremflickr.com/320/240"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                  <img
                    className="d-block w-100"
                    src="https://loremflickr.com/320/240"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://loremflickr.com/320/240"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
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
          <div className="col-lg-6 col-md-4 col-12 m-auto">
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
