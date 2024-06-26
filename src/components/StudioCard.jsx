import React, { useState } from "react";
import rivendell from "../assets/rivendell.jpeg";

const StudioCard = ({ studio }) => {
  return (
    <>
      <div className="studio-card">
        <h2>{studio.studio_name}</h2>
        <h5>
          Address:
          {studio.address}
        </h5>
        <p>Description: {studio.description}</p>
        <h5>Rating: {studio.rating}</h5>
        {/* <img src={rivendell} alt="rivendell-img" /> */}
        <button>Book</button>
      </div>
    </>
  );
};

export default StudioCard;
