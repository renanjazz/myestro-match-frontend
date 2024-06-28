import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to={`/studios/${studio._id}`}>
          <button>Know more</button>
        </Link>
      </div>
    </>
  );
};

export default StudioCard;
