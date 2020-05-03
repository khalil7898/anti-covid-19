import React  from "react";
import hopitalimg from "../img/hopital.jpg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Popupdetaille from "./Popupdetaille";

const Cards = ({ hopitale }) => {
  

  return (
    <div className="cards">
      <div className="card">
        <img className="card-img-top" src={hopitalimg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-primary">{hopitale.nom}</h5>

          <p className="card-text">
            <FaPhoneAlt />
            {"  "} {hopitale.telephone}
          </p>
          <p className="card-text">
            <FaMapMarkerAlt />
            {"  "} {hopitale.adress.nom}
          </p>

          <p>
            (longitude :{hopitale.adress.longitude} / latitude :
            {hopitale.adress.latitude} ){" "}
          </p>

          <hr />
          <div className="row">
            <Popupdetaille hopitale={hopitale}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
