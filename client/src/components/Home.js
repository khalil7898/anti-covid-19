import React, { useState, useEffect } from "react";
import Sidebare from "./Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Hospitals from'./Hospitals';
import Confinement from "./Confinement";
import Map from "./Map";

function Home(props) {
  

  return (
   <Hospitals></Hospitals>
  );
}

export default Home;
