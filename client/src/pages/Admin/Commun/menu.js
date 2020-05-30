import React, { useState } from "react";
import { createEventHandlerWithConfig } from "recompose";


  



function Menu()
{
  

  function handleClick(e) {
  
    localStorage.clear();
  }
    return (
      <div  >
        <div
          id="sidebar-wrapper"
          data-simplebar
          data-simplebar-auto-hide="true"
       
        >
          <div className="brand-logo">
            
              <img
                src="assets/images/logo-icon.png"
                className="logo-icon"
                alt="logo icon"
              />
              <h5 className="logo-text">{localStorage.getItem("nom")}</h5>
            
          </div>
          <ul className="sidebar-menu do-nicescrol">
            <li className="sidebar-header">MAIN NAVIGATION</li>
            <li className="sidebar-header">
              <a  className="waves-effect">
                <i className="fa fa-ambulance" />{" "}
                <span>Hopitals</span>{" "}
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="sidebar-submenu">
              <li className="sidebar-header">
              <a  className="waves-effect" href="/listeHopital">
                <i className="icon-list icons"/>
                <span>Lister </span>
              </a>
            </li>
            <li className="sidebar-header">
              <a  className="waves-effect"  href="/ajoutHopital">
                <i className="icon-plus icons "/>
                <span>Ajouter</span>
              </a>
            </li>

            <li className="sidebar-header ml-1">
              <a  className="waves-effect"  href="/statsHopital">
                <i className="fa fa-bar-chart"/>
                <span>Stats</span>
              </a>
            </li>
                
              </ul>
            </li>


           

            <li className="sidebar-header">
              <a  className="waves-effect">
                <i className="fa fa-home" />{" "}
                <span> centre de confinement</span>{" "}
                <i className="fa fa-angle-left pull-right" />
              </a>
              <ul className="sidebar-submenu">
              <li className="sidebar-header">
              <a  className="waves-effect" href="/listeCentre">
                <i className="icon-list icons"/>
                <span>Lister </span>
              </a>
            </li>
            <li className="sidebar-header">
              <a  className="waves-effect"  href="/ajoutCentre">
                <i className="icon-plus icons "/>
                <span>Ajouter</span>
              </a>
            </li>

           
                
              </ul>
            </li>

            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>

            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>

            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>

            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect"></li>
            <li  className="sidebar-header waves-effect">


                <a href="/login" onClick={handleClick}>
                <i className="zmdi zmdi-key text-danger" />{" "}
                <span>LogOut</span>
                </a>
            </li>
           
          </ul>
        </div>
      </div>
    );
  }

 export default Menu;