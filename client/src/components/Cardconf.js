import React from "react";
import hotelimg from "../img/hotel.jpg";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Cardconf = ({ confinement }) => {
  return (
    <div className="cards">
      <div className="card">
        <img className="card-img-top" src={hotelimg} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-primary">{confinement.username}</h5>

          <p className="card-text">
            <FaPhoneAlt />
            {/* {"  "} {confinement.telephone} */}
          </p>
          <p className="card-text">
            <FaMapMarkerAlt />
            {/* {"  "} {confinement.adress.nom} */}
          </p>

          {/* <p>
            (longitude :{confinement.adress.longitude} / latitude :
            {confinement.adress.latitude} ){" "}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Cardconf;
