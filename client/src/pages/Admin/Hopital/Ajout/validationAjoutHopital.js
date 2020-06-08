import React from 'react'

const  validationAjoutHopital=(values) =>{
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
      
      if (!values.capaciteTotal) {
        errors.capaciteTotal ="capacite Total is required";
      }
      if (!values. capaciteCorona) {
        errors. capaciteCorona ="capacite Corona is required";
 
      }
    


      if (!values.reacharger) {
        errors.reacharger ="required";
      }
      
      if (!values.villev) {
        errors.villev ="ville is required";
      }


      if (!values.totalCharger) {
        errors.totalCharger =" required";
      }
      if (!values. coronaCharger) {
        errors. coronaCharger ="required";
 
      }


     
      if (!values. capaciteRea) {
        errors. capaciteRea ="capacite Corona is required";
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

export default validationAjoutHopital
