import React from 'react'
import { useForm } from "react-hook-form";
import Details from './Details'
import Map from "./Map"

export default function Contact() {
  const{register, handleSubmit, formState: {errors}} = useForm()
  const onSubmit = (data)=>{console.log(data)}

  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>

      <div className="d-flex align-items-center justify-content-center flex-wrap"
      data-aos="zoom-in"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      >
        <Details/>
        <div className="col-6">
        <br/>
        <br/>
            <section className="d-flex flex-column align-items-start justify-content-center w-75 m-auto" >
                <h1>Contactez moi</h1>
                <span>Laissez moi vos coordonnées</span>
                <form className="d-flex flex-column form-group w-100" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control my-4" placeholder="Nom*"  {...register('lastname', {required: true})}/>
                    {errors.lastname && <code>Votre nom est obligatoire !</code>}

                    <input className="form-control mb-4" placeholder="Prénom*"  {...register('firstname', {required: true})}/>
                    {errors.firstname && <code>Votre prénom est obligatoire !</code>}

                    <input className="form-control mb-4" placeholder="Email*" type="mail"  {...register('email', {required: true})}/>
                    {errors.email && <code>Votre email est obligatoire !</code>}

                    <input className="form-control mb-4" placeholder="Objet*" type="mail"  {...register('title', {required: true})}/>
                    {errors.email && <code>Le titre est obligatoire !</code>}

                    <textarea className="form-control mb-3"  placeholder="Votre message ici*" type="text" rows={5} {...register('message', {required: true})} />
                    {errors.message?.type === 'required' && <code>Votre message est obligatoire !</code>}

                    <br/>
                    <input className="btn btn-success" type="submit"/>
                </form>
            </section>
        </div>
        <hr/>
        <div className="col-md-6 d-flex justify-content-center align-items-center" style={{height: '100vh'}} >
          <img src="images/contact.jpg" alt="phone" style={{width: '90%', boxShadow: 'grey 5px 5px 10px', borderRadius: '5%'}}/>
        </div>
      </div>
        <div className={"container"}>
            <Map/>

        </div>
    </>
  );
}
