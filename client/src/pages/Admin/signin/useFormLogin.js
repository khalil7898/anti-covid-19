import { useState,useEffect } from "react";
import axios from "axios"

const useFormLogin = (callback, validationLogin) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validationLogin(values));
    setIsSubmitted(true)

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
export default useFormLogin;
