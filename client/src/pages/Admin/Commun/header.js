import React, { Component } from "react";
import { compose } from "recompose";
import profileImg from "../../../img/profile_img.jpg";

function Header() {
  return (
    <div>
      <header className="topbar-nav">
        <nav className="navbar navbar-expand fixed-top bg-white">
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link toggle-menu" href="take_url">
                <i className="icon-menu menu-icon" />
              </a>
            </li>
            <li className="nav-item">
              <form className="search-bar">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter keywords"
                />
                <a href="take_url">
                  <i className="icon-magnifier" />
                </a>
              </form>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
