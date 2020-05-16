import React from "react";
import hopitales from "./Hospitals.js";

function Sidebare() {
  return (
    <div className="">
      <div id="sidebar-wrapper" >
        <ul className="sidebar-menu do-nicescrol mt-5">
        <li>
            <a href="/Home" className="waves-effect">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/Hospitalinfo" className="waves-effect">
              <span>Informations sur les hopitales</span>
            </a>
          </li>

          <li>
            <a href="Confinementinfo" className="waves-effect">
              <span>Informations sur le confinement </span>
            </a>
          </li>
          <li>
            <a href="" className="waves-effect">
              <span>Informations sur les governements </span>
            </a>
          </li>
          <li>
            <a href="javaScript:void();" className="waves-effect">
              <span>About us</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebare;
