import React, { useState } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

import GoogleButton from "react-google-button";
import useFormLogin from "./useFormLogin";
import validationLogin from "./validationLogin";
import "../../../index.css";
import axios from "axios";
import ErreurMessage from "../Commun/erreurMessage";

const Login = ({ history }) => {
  const { handleOnChange, handleSubmit, values, errors } = useFormLogin(
    submit,
    validationLogin
  );
  const [erreurMsg, setErreurMsg] = useState("");

  function submit() {
    console.log("submmited");
    axios
      .post("https://anti-covid-19.herokuapp.com/api/admin/login", values)
      .then((res) => {
        console.log(res);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("nom", res.data.name);

        history.push("/statsHopital");
      })
      .catch((err) => {
        setErreurMsg(err.message);
      });
  }

  return (
    <div id="wrapper">
      <div className="card card-authentication1 mx-auto my-5">
        <div className="card-body">
          <div className="card-content p-2">
            <div className="text-center">
              <img src="assets/images/logo-icon.png" alt="logo icon" />
            </div>
            <div className="card-title text-uppercase text-center py-3">
              Sign In
            </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>Email</label>
                <div className="position-relative has-icon-right ">
                  <input
                    type="Email"
                    name="email"
                    id="InputUserEmail"
                    className="form-control input-shadow"
                    placeholder="Enter Your Email"
                    value={values.email}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="zmdi zmdi-email" />
                  </div>
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="position-relative has-icon-right">
                  <input
                    name="password"
                    type="password"
                    id="InputPassword"
                    className="form-control input-shadow"
                    placeholder="Enter Password"
                    value={values.password}
                    onChange={handleOnChange}
                  />
                  <div className="form-control-position">
                    <i className="icon-lock" />
                  </div>
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-6">
                  <div className="icheck-material-primary">
                    <input type="checkbox" id="user-checkbox" defaultChecked />
                    <label htmlFor="user-checkbox">Remember me</label>
                  </div>
                </div>
                <div className="form-group col-6 text-right">
                  <a href="authentication-reset-password.html">
                    Reset Password
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className=" mt-3 btn btn-primary shadow-primary btn-block waves-effect waves-light"
              >
                Sign In
              </button>

              <div className="mt-3 d-flex justify-content-center">
                <GoogleButton type="dark" />
              </div>
            </form>
          </div>
        </div>
        <div className="card-footer text-center py-3">
          <p className="text-muted mb-0">
            Do not have an account? <a href="/register"> Sign Up here</a>
          </p>
        </div>

        <ErreurMessage msg={erreurMsg} />
      </div>
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-double-up" />{" "}
      </a>
    </div>
  );
};

export default compose(withRouter)(Login);
