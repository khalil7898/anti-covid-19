import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Cardconf from "./Cardconf";
import Sidebare from "./Sidebar";
import Map from "./Map";


function Confinement(props) {
  const [confPlaces, setConfPlaces] = useState([]);
  const [nameConfPlace, setNameConfPlace] = useState("");
  const [currentCard, setCurrentCard] = useState(1);
  const [cardPerPage] = useState(8);
  const [filterConfinment, setFilterConfinment] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setConfPlaces(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  });

  const indexOfLastCard = currentCard * cardPerPage;
  const indexOfFirsCard = indexOfLastCard - cardPerPage;
  const currentCards = confPlaces.slice(indexOfFirsCard, indexOfLastCard);
  const paginate = (pageNumber) => setCurrentCard(pageNumber);

  console.log(currentCards);

  useEffect(() => {
    setFilterConfinment(
      currentCards.filter((confplace) => {
        return confplace.username
          .toLowerCase()
          .includes(nameConfPlace.toLowerCase());
      })
    );
  }, [nameConfPlace, confPlaces]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 ">
          <Sidebare />
        </div>
        <div className="col-lg-8 ">
          <div className="">
            <div className="col ">
              <div className="row">
                <div className="card col-lg-10 mt-4 ">
                  <div className="card-body">
                    <div className="card-title text-primary">
                      Trouver votre centre de cofinement 
                    </div>
                    <hr />

                    <div className="form-group">
                      <label htmlFor="input-6">
                        Hotel ou foyer universutaire
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-rounded"
                        id="input-6"
                        placeholder="Enter Your Name"
                        onChange={(e) => {
                          setNameConfPlace(e.target.value);
                        }}
                        value={nameConfPlace}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" id="ddk">
                {filterConfinment.map((conf) => {
                  return (
                    <div className="col-lg-5">
                      <Cardconf confinement={conf} />
                    </div>
                  );
                })}
              </div>
              <div className="row d-flex justify-content-center">
                <Pagination
                  cardPerPage={cardPerPage}
                  totalCardes={confPlaces.length}
                  paginate={paginate}
                />
              </div>
            </div>

            {/*End Row*/}

            {/*Start footer*/}
          </div>
        </div>
      </div>

      {/*End Row*/}

      {/*Start footer*/}
    </div>
  );
}

export default Confinement;
