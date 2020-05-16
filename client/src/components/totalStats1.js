import React, { useState, useEffect } from "react";
import Sidebare from "./Sidebar";
import Map from "./Map";

import axios from "axios";
import { Line } from "react-chartjs-2";

const Stats1 = () => {
  const [chartData, setChartData] = useState({});
 
  const chart = () => {
    let dates = [];
    let nombreTestJour = [];
    let nombreCasJour = [];
    
    axios
      .get(
        "https://services6.arcgis.com/BiTAc9ApDDtL9okN/arcgis/rest/services/COVID19_Table_DATESetTOTAL/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      )
      .then((response) => {
        var i = 0;
        //  for (var i = 0; i < response.data.features.length; i=i+7)
        while((i < response.data.features.length) && (response.data.features[i].attributes.Total_Confirmed !== null))
         {
          const day = new Date(2020, 3, 4 + i);
          dates.push(
            day.getDate() + "-" + day.getMonth() + "-" + day.getFullYear()
          );
          nombreTestJour.push(
            parseInt(response.data.features[i].attributes.Nb_tests_journalier)
          );

          nombreCasJour.push(
            parseInt(response.data.features[i].attributes.Nb_cas_journalier)
          );
            i=i+5
        
          
        }
        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Nombre total des test par jour",
              data: nombreTestJour,
              borderWidth: 1.7,
              borderColor: "#A52A2A",
              pointBorderColor: "#A52A2A",  
              fill: false,
            },
            {
              label: "Nombre total des cas par jour",
              data: nombreCasJour,
              borderColor: "#8A2BE2",
              pointBorderColor: "#8A2BE2",
              borderWidth: 1.7,
              fill: false,
            },
          ],
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    chart();
  }, []);
  return (
   
        
         
            <div className="card justify-content-center">
              <div className="card-header"> Nombre des test et cas journalier </div>
              <div className="card-body">
                <Line
                  data={chartData}
                  options={{ responsive: true, maintainAspectRatio: true }}
                />
              </div>
            </div>
          
        
       
     
  );
};

export default Stats1;
