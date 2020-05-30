import React, { useState, useEffect } from "react";
import Stats from "./totalStats";
import Map from "./Map";

function Home(props) {
  return (
    <React.Fragment>
      <Map />
      <Stats />
    </React.Fragment>
  );
}

export default Home;
