import React, { useState, useEffect } from "react";
import Menu from "../../Commun/menu";
import Header from "../../Commun/header";
import axios from "axios";
import { PieChart } from "react-minimal-pie-chart";
import * as Chart from "chart.js";
import { Pie } from "react-chartjs-2";

const StatsHopitalHome = () => {
  const [chartPieData, setChartPieData] = useState({});
  const [hopital, setHopital] = useState([]);
  let nbHopital = 0;
  let capTotal = 0;
  let capCharger = 0;
  let capLibre = 0;
  let a = 0;

  useEffect(() => {
    const fetchHopital = async () => {
      const res = await axios.get(
        "https://anti-covid-19.herokuapp.com/api/hospitals"
      );
      setHopital(res.data);
    };
    fetchHopital();
  }, []);
  hopital.map((hop) => {
    nbHopital++;
    capTotal = capTotal + hop.capaciteTotal;
    capCharger = capCharger + hop.totalCharger;
    capLibre = capLibre + (hop.capaciteTotal - hop.totalCharger);
  });

  const chartPie = () => {
    axios
      .get("https://anti-covid-19.herokuapp.com/api/hospitals")
      .then((res) => {
        res.data.map((hop) => {
          capCharger = capCharger + hop.totalCharger;
          capLibre = capLibre + (hop.capaciteTotal - hop.totalCharger);
        });
        setChartPieData({
          labels: ["occupé", "libre"],
          datasets: [
            {
              label: "name",
              data: [capCharger, capLibre],
              backgroundColor: ["rgba(75,192,192,0.6)"],
            },
          ],
      
        });
      });
  };
  useEffect(() => {
    chartPie();
  }, []);

  return (
    <div id="wrapper"  className="in ">
      <Header />
      <Menu />
      <div>
        <div className="clearfix" />
        <div className="content-wrapper">
          <div className="card-title text-info">
            <h4>statistique generale </h4>
          </div>
          <hr />
          <div className="container-fluid">
            {/*Start Dashboard Content*/}
            <div className="row mt-3">
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card gradient-scooter">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white">Nembre des hopitals</p>
                        <h4 className="text-white line-height-5">
                          {nbHopital}
                        </h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa fa-ambulance text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card gradient-blooker">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white">
                          Capacité Total des hopitals
                        </p>
                        <h4 className="text-white line-height-5">{capTotal}</h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa fa-users text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-6 col-xl-3">
                <div className="card gradient-bloody">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white"> Nembre des lits occupé</p>
                        <h4 className="text-white line-height-5">
                          {capCharger}
                        </h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa fa-exclamation-triangle text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-13 col-lg-6 col-xl-3">
                <div className="card gradient-ohhappiness">
                  <div className="card-body">
                    <div className="media align-items-center">
                      <div className="media-body">
                        <p className="text-white"> Nembre des lits Libre</p>
                        <h4 className="text-white line-height-5">{capLibre}</h4>
                      </div>
                      <div className="w-circle-icon rounded-circle border border-white">
                        <i className="fa fa-heart text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Row*/}
            <div className="row">
              <div className="col-10 col-lg-6">
                <div className="card">
                  <div className="card-header">occupé # libre</div>
                  <div className="card-body">
                    <Pie data={chartPieData} />
                  </div>
                </div>
              </div>

              <div className="col-10 col-lg-4 col-xl-6">
                <div className="card">
                  <div className="card-header">Reanimation occupé</div>
                  <div className="card-body">
                    {hopital.map((hop) => (
                      <div>
                        <div className="media align-items-center">
                          <div>
                            <i className="fa fa-ambulance " />
                          </div>
                          <div className="media-body text-left ml-3">
                            <div className="progress-wrapper">
                              <p>
                                {hop.nom}{" "}
                                <span className="float-right">
                                  {" "}
                                  {
                                    (a = Math.floor(
                                      (hop.reacharger * 100) / hop.capaciteRea
                                    ))
                                  }
                                  %
                                </span>
                              </p>
                              <div className="progress" style={{ height: 5 }}>
                                <div
                                  className="progress-bar bg-youtube"
                                  style={{ width: a + "%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/*End Row*/}

            {/*End Dashboard Content*/}
          </div>
          {/* End container-fluid*/}
        </div>
        {/*End content-w
         */}
      </div>
    </div>
  );
};

export default StatsHopitalHome;
