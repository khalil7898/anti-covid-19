import React, { useState, useEffect } from "react";
import Sidebare from "./Sidebar";
import Map from "./Map";

import axios from "axios";
import { Line } from "react-chartjs-2";
import Stats1 from "./totalStats1";
import Stats2 from "./totalStats2";



const Stats = () => {
  const [chartData, setChartData] = useState({});
  const [totalcas, setTotalCas] = useState(0);
  const [totalRetablis, setTotalRetablis] = useState(0);
  const [totalDece, setTotalDece] = useState(0);

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
        var i = 0;
        
        while((i < response.data.features.length) && (response.data.features[i].attributes.Total_Confirmed !== null)){
          const day = new Date(2020, 3, 4 + i);
          dates.push(
            day.getDate() + "-" + day.getMonth() + "-" + day.getFullYear()
          );
        
          nombreMal.push(
            parseInt(response.data.features[i].attributes.Total_Confirmed)
          );
           if(response.data.features[i].attributes.Retablis === null)
           {
              nombreretablie.push(nombreretablie[i-1])
           }else{
            nombreretablie.push(
              parseInt(response.data.features[i].attributes.Retablis)
            )
            }
          morts.push(parseInt(response.data.features[i].attributes.Décès));
          i++;
        }
        
        setTotalCas(nombreMal[nombreMal.length - 1]);
        setTotalRetablis(nombreretablie[nombreretablie.length - 1]);
        setTotalDece(morts[morts.length - 1]);
        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Nombre total des cas",
              data: nombreMal,
              borderWidth: 1.7,
              borderColor: "rgba(255, 0, 0, 0.6)",

              fill: false,
            },
            {
              label: "Nombre total des Retablis",
              data: nombreretablie,
              borderColor: "rgba(0, 177, 106, 1)",
              pointBorderColor: "rgba(0, 177, 106, 1)",
              borderWidth: 1.7,
              fill: false,
            },
            {
              label: "nombre total des Décès ",
              data: morts,
              borderColor: "rgba(108, 122, 137, 1)",
              pointBorderColor: "rgba(108, 122, 137, 1)",
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
    <div className="container-fluid">
      <Map></Map>
      <div className="row">
        <div className="col-lg-2 ">
          <Sidebare />
        </div>
        <div className="col-lg-10 ">
          <div className="container-fluid">
            <div className="row mt-3">
              <div className="col-12 col-lg-6 col-xl-4">
                <div
                  className="card "
                  style={{ backgroundColor: "rgba(255, 0, 0, 0.6)" }}
                >
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white">Nembre total des cas</p>
                        <h4 className="text-white line-height-5">
                          {" "}
                          {totalcas}
                        </h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa  fa-bed text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-13 col-lg-6 col-xl-4">
                <div
                  className="card "
                  style={{ backgroundColor: "rgba(0, 177, 106, 1)" }}
                >
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white"> Nombre total des Retablis</p>
                        <h4 className="text-white line-height-5">
                          {" "}
                          {totalRetablis}
                        </h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa fa-heart text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-4">
                <div
                  className="card "
                  style={{ backgroundColor: "rgba(149, 165, 166, 1)" }}
                >
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white"> Nombre total des Décèsé</p>
                        <h4 className="text-white line-height-5">
                          {totalDece}
                        </h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa fa-exclamation-triangle text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card justify-content-center">
            <div className="card-header">Informations sur la propagation du virus </div>
              <div className="card-body">
                <Line
                  data={chartData}
                  options={{ responsive: true }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <Stats1></Stats1>
            </div>
            <div className="col-lg-6">
              <Stats2></Stats2>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
