import React, { useState, useEffect } from "react";
import Sidebare from "./Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Hospitals from'./Hospitals';
import Confinement from "./Confinement";

function Home(props) {
  

  return (
    <div className="container-fluid">
      
      <div className="row">
        <div className="col-lg-4 " >
          <Sidebare />
          
        </div>
        <div className="col-lg-8 ">
        <Router>
        <Switch>
          <Route path="/Hospitalinfo" exact component={Hospitals} />
          <Route path="/Confinementinfo" exact component={Confinement} />
        </Switch>
      </Router>
       </div>
       </div>
      
      {/*End Row*/}

      {/*Start footer*/}
    </div>
  );
}

export default Home;
