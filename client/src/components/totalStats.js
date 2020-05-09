import React, { useState, useEffect } from "react";
import Sidebare from "./Sidebar";
import Map from "./Map";

import axios from "axios";
import { Line } from "react-chartjs-2";

const Stats = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let dates = [];
    let nombreMal = [];
    let nombreretablie = [];
    let morts = [];
    axios
      .get(
        "https://services6.arcgis.com/BiTAc9ApDDtL9okN/arcgis/rest/services/COVID19_Table_DATESetTOTAL/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      )
      .then((response) => {
        for (var i = 0; i < response.data.features.length - 4; i++) {
          const day = new Date(2020, 3, 4 + i);
          dates.push(
            day.getDate() + "-" + day.getMonth() + "-" + day.getFullYear()
          );
          nombreMal.push(
            parseInt(response.data.features[i].attributes.Total_Confirmed)
          );
          nombreretablie.push(
            parseInt(response.data.features[i].attributes.Retablis)
          );
          
          morts.push(
            parseInt(response.data.features[i].attributes.Décès)
          );
        }

        setChartData({
            labels: dates,
            datasets: [
              {
                label: "nombre total des cas",
                data: nombreMal,
                borderWidth: 1.7,
                borderColor: "red",
                pointBorderColor: "red",
                
                fill:false
              },
              {
                label: "nombre total des Retablis",
                data: nombreretablie,
                borderColor: "green",
                pointBorderColor:"green",
                borderWidth: 1.7,
                fill:false
                
              },
              {
                label: "nombre total des Décès ",
                data: morts,
                borderColor: ['black'],
                pointBorderColor:"black",
                borderWidth: 1.7,
                fill:false
                
              },
            ],
          });
      } )

      .catch((error) => {
        console.log(error);
      });
    
  };
  useEffect(() => {
    chart();
  },[]);
  return (
    <div className="container-fluid">
      <Map></Map>
      <div className="row">
        <div className="col-lg-2 ">
          <Sidebare />
        </div>
        <div className="col-lg-10 ">
        <div style={{marginTop: 30}}>
         <Line data={chartData} options={{responsive:true,maintainAspectRatio: true}}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
