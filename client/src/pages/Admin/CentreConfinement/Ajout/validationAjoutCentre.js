import React from 'react'

const  validationAjoutCentre=(values) =>{
    let errors = {};
   
    if (!values.nom) {
        errors.nom ="Name is required";
      }


      if (!values.adressnom) {
        errors.adressnom ="Adress is required";
      }
      
      if (!values.longitude) {
        errors.longitude ="longitude is required";
      }
      if (!values.latitude) {
        errors.latitude ="latitude is required";
      }
      
      if (!values.capacite) {
        errors.capacite ="capacite is required";
      }
 
    


      if (!values.nombrePersonne) {
        errors.nombrePersonne =" nombre Personne is required";
      }
      
      if (!values.villev) {
        errors.villev ="ville is required";
      }


    
      
      if (!values.telephone) {
        errors.telephone = "telephone is required";
      } else if (values.telephone.length <8) {
        errors.telephone = "telephone needs to be 8 numbers";
      }else if (values.telephone.length >8) {
        errors.telephone = "telephone needs to be 8 numbers";
      }
      return errors;
   
}

export default validationAjoutCentre
