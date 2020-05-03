import React, { Component } from "react";
import { compose } from "recompose";


function Header ()
{
 
  
    return (
      <div >
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

            <ul className="navbar-nav align-items-center right-nav-link">
              <li className="nav-item dropdown-lg">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-envelope-open-o" />
                  <span className="badge badge-secondary badge-up">12</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      You have 12 new messages
                      <span className="badge badge-secondary">12</span>
                    </li>
                    <li className="list-group-item">
                      <a>
                        <div className="media">
                          <div className="avatar">
                            <img
                              className="align-self-start mr-3"
                              src="assets/images/avatars/avatar-5.png"
                              alt="user avatar"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 msg-title">Jhon Deo</h6>
                            <p className="msg-info">
                              Lorem ipsum dolor sit amet...
                            </p>
                            <small>Today, 4:10 PM</small>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li className="list-group-item">
                      <a href="take_url">
                        <div className="media">
                          <div className="avatar">
                            <img
                              className="align-self-start mr-3"
                              src="assets/images/avatars/avatar-7.png"
                              alt="user avatar"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 msg-title">Dannish Josh</h6>
                            <p className="msg-info">
                              Lorem ipsum dolor sit amet...
                            </p>
                            <small>5/11/2018, 2:50 PM</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="take_url">
                        <div className="media">
                          <div className="avatar">
                            <img
                              className="align-self-start mr-3"
                              src="assets/images/avatars/avatar-8.png"
                              alt="user avatar"
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 msg-title">Katrina Mccoy</h6>
                            <p className="msg-info">
                              Lorem ipsum dolor sit amet.
                            </p>
                            <small>1/11/2018, 2:50 PM</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="take_url">See All Messages</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item dropdown-lg">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect"
                  data-toggle="dropdown"
                  href="take_url"
                >
                  <i className="fa fa-bell-o" />
                  <span className="badge badge-info badge-up">14</span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      You have 14 Notifications
                      <span className="badge badge-info">14</span>
                    </li>
                    <li className="list-group-item">
                      <a href="take_url">
                        <div className="media">
                          <i className="zmdi zmdi-accounts fa-2x mr-3 text-primary" />
                          <div className="media-body">
                            <h6 className="mt-0 msg-title">
                              New Registered Users
                            </h6>
                            <p className="msg-info">
                              Lorem ipsum dolor sit amet...
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="take_url">
                        <div className="media">
                          <i className="zmdi zmdi-coffee fa-2x mr-3 text-success" />
                          <div className="media-body">
                            <h6 className="mt-0 msg-title">
                              New Received Orders
                            </h6>
                            <p className="msg-info">
                              Lorem ipsum dolor sit amet...
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="take_url">
                        <div className="media">
                          <i className="zmdi zmdi-notifications-active fa-2x mr-3 text-secondary" />
                          <div className="media-body">
                            <h6 className="mt-0 msg-title">New Updates</h6>
                            <p className="msg-info">
                              Lorem ipsum dolor sit amet...
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a href="take_url">See All Notifications</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item language">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect"
                  data-toggle="dropdown"
                  href="take_url"
                >
                  <i className="flag-icon flag-icon-gb" />
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-item">
                    {" "}
                    <i className="flag-icon flag-icon-gb mr-2" /> English
                  </li>
                  <li className="dropdown-item">
                    {" "}
                    <i className="flag-icon flag-icon-fr mr-2" /> French
                  </li>
                  <li className="dropdown-item">
                    {" "}
                    <i className="flag-icon flag-icon-cn mr-2" /> Chinese
                  </li>
                  <li className="dropdown-item">
                    {" "}
                    <i className="flag-icon flag-icon-de mr-2" /> German
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                  data-toggle="dropdown"
                  href="take_url"
                >
                  <span className="user-profile">
                    <img
                      src="assets/images/avatars/avatar-13.png"
                      className="img-circle"
                      alt="user avatar"
                    />
                  </span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-item user-details">
                    <a href="take_url">
                      <div className="media">
                        <div className="avatar">
                          <img
                            className="align-self-start mr-3"
                            src="assets/images/avatars/avatar-13.png"
                            alt="user avatar"
                          />
                        </div>
                        <div className="media-body">
                          <h6 className="mt-2 user-title">Katrina Mccoy</h6>
                          <p className="user-subtitle">mccoy@example.com</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-item">
                    <i className="icon-envelope mr-2" /> Inbox
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-item">
                    <i className="icon-wallet mr-2" /> Account
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-item">
                    <i className="icon-settings mr-2" /> Setting
                  </li>
                  <li className="dropdown-divider" />
                  <li className="dropdown-item">
                    <i className="icon-power mr-2" /> Logout
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }


  export default Header;
