import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Pagination from "./Pagination";
import axios from "axios";


function Hospitals() {
  const [hopitales, setHopitales] = useState([]);
  const [nameHopital, setNameHopital] = useState("");
  // const [nbEspace, setNbEspase] = useState(0);
  const [currentCard, setCurrentCard] = useState(1);
  const [cardPerPage] = useState(2);

  console.log();

  useEffect(() => {
    // let newNbEspace =
    //   nameHopital.length - nameHopital.replace(/\s+/g, "").length;
    // if (newNbEspace - nbEspace === 1 && nbEspace !== newNbEspace) {
    //  getHospitals(1, nameHopital)
    //   setNbEspase(newNbEspace);
    // }
    axios
      .get("https://anti-covid-19.herokuapp.com/api/hospitals")
      .then((response) => {
        console.log(response);
        setHopitales(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const indexOfLastCard = currentCard * cardPerPage;
  const indexOfFirsCard = indexOfLastCard - cardPerPage;
  const currentCards = hopitales.slice(indexOfFirsCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentCard(pageNumber);
  return (
    <div className="">
      
      
    

        <div className="col ">
          <div className="row">
            <div className="card col-lg-10 mt-4 ">
              <div className="card-body">
                <div className="card-title text-primary">
                  Find your hospital
                </div>
                <hr />

                <div className="form-group">
                  <label htmlFor="input-6">Hospital Name</label>
                  <input
                    type="text"
                    className="form-control form-control-rounded"
                    id="input-6"
                    placeholder="Enter Your Name"
                    onChange={(e) => {
                      setNameHopital(e.target.value);
                      console.log(
                        nameHopital.length -
                          nameHopital.replace(/\s+/g, "").length
                      );
                    }}
                    value={nameHopital}
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary shadow-primary px-5"
                  >
                    <i className="icon-lock" /> Chercher
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {currentCards.map((hop) => {
              return (
                <div className="col-lg-5">
                  <Cards hopitale={hop} />
                </div>
              );
            })}
          </div>
          <div className="row d-flex justify-content-center">
            <Pagination
              cardPerPage={cardPerPage}
              totalCardes={hopitales.length}
              paginate={paginate}
            />
          </div>
        </div>
      
      
      {/*End Row*/}

      {/*Start footer*/}
    </div>
  );
}

export default Hospitals;
