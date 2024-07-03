import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudioCard = ({ studio }) => {
  return (
    <>
      <div className="teacher-studio-card">
        <h3>{studio.studio_name}</h3>
        <p>
          Address: {studio.address}
        </p>
        <p>Rating: {studio.rating}</p>
        <Link to={`/studios/${studio._id}`}>
          <button className="teacher-page-button">Know more</button>
        </Link>
      </div>
    </>
  );
};

export default StudioCard;
