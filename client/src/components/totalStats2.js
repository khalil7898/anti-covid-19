import React, { useState, useEffect } from "react";
import Sidebare from "./Sidebar";
import Map from "./Map";

import axios from "axios";
import { Pie } from "react-chartjs-2";

const Stats2 = () => {
  const [chartData, setChartData] = useState({});
 
  const chart = () => {
    let dates = [];
    let importe = 0;
    let aurto = 0;
    
    axios
      .get(
        "https://services6.arcgis.com/BiTAc9ApDDtL9okN/arcgis/rest/services/COVID19_Table_DATESetTOTAL/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"
      )
      .then((response) => {
        
        for (var i = 0; i < response.data.features.length; i++) {
          const day = new Date(2020, 3, 4 + i);
          dates.push(
            day.getDate() + "-" + day.getMonth() + "-" + day.getFullYear()
          );
          if(response.data.features[i].attributes.importe !== null){
          importe = parseInt(response.data.features[i].attributes.importe)
          ;}
          if(response.data.features[i].attributes.Autochtone !== null)
          
           aurto =  parseInt(response.data.features[i].attributes.Autochtone)
          ;

         console.log(aurto,importe)
          
        }
        setChartData({
            labels: ["Autochtone","importe" ],
            datasets: [
              {
                label: "name",
                data: [aurto,importe],
                backgroundColor: ["rgba(30, 139, 195, 1)"],
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
   
        
         
            <div className="card justify-content-center" >
              <div className="card-header"> Source de viruse  </div>
              <div className="card-body">
                <Pie
                  data={chartData}
                  style={{maintainAspectRatio:true,
                    aspectRatio:2}}
                />
              </div>
            </div>
          
        
       
     
  );
};

export default Stats2;
