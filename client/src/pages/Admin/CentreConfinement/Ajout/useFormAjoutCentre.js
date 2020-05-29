import React, { useEffect, useState } from "react";

const useFormAjoutCentre = (callback, validationAjoutCentre) => {
  const [values, setValues] = useState({
    nom: "",
    villev: "",
    adressnom: "",
    longitude: "",
    latitude: "",
    telephone: "",
    capacite: "",
  nombrePersonne:"",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOnChange = (event) => {
    console.log({target : event.target})
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validationAjoutCentre(values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      callback();
    }
  }, [errors]);

  return {
    handleOnChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useFormAjoutCentre;
