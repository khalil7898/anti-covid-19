import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import Sidebare from "./Sidebar";

function Detaille() {
  const [governemnts, setGovernemnts] = useState([]);

  useEffect(() => {
    let results = [];
    axios
      .get(
        "https://apple-reviews.herokuapp.com/getTunisia?fbclid=IwAR0Q-dYRphQ_XAKmkoDE20WC2OVlxHD8TFg0mQujVMRDPm5HEL43kT2Fj-A"
      )
      .then((response) => {
        console.log(response.data.result.length);

        for (var i = 0; i < response.data.result.length - 2; i++) {
          results.push(response.data.result[i]);
        }
        console.log(results);
        setGovernemnts(results);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: " Cas positif",
        field: "positif",
        sort: "asc",
        width: 100,
      },
      {
        label: "Décés",
        field: "deces",
        sort: "asc",
        width: 100,
      },
      {
        label: "Rétablis",
        field: "retablis",
        sort: "asc",
        width: 100,
      },
      {
        label: "Cas Actif",
        field: "actif",
        sort: "asc",
        width: 100,
      },
    ],

    rows: governemnts.map((res) => {
      return {
        name: res[0],
        positif: res[1],
        deces: res[2],
        retablis: res[3],
        actif: res[4],
      };
    }),
  };

  return (
    <div className="">
      <div className="row">
        <div className="col-lg-3 ">
          <Sidebare />
        </div>
        <div className="col-lg-9 ">
          <div className="card justify-content-left mt-5 mr-5">
            <div className="card-body">
              <MDBDataTable striped bordered hover data={data} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detaille;
