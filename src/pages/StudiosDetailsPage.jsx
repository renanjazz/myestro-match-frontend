import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StudiosDetailsPage = () => {
  const { studioId } = useParams();
  const [studioDetails, setStudioDetails] = useState([]);
  console.log(studioId);
  useEffect(() => {
    const fetchStudio = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/studios/api/studios/${studioId}`
        );
        console.log("This is the studio data", data);
        setStudioDetails(data.foundStudio);
        console.log("This is after setting the useState", studioDetails);
      } catch (error) {
        console.log("Error fetching the studio", error);
      }
    };
    fetchStudio();
  }, [studioId]);

  return (
    <>
      <div className="studios-details">
        <form>
          <h2>Studio Name: {studioDetails.studio_name}</h2>
          {studioDetails.picture}
          <h4>
            Address:
            {studioDetails.address}
          </h4>
          <h5>Description: {studioDetails.description}</h5>
          <h5>Availability: {studioDetails.availability}</h5>
          <h5>Rating: {studioDetails.rating}</h5>
          <h5>Email: {studioDetails.contact_email} </h5>
          <h5>Phone: {studioDetails.contact_phone}</h5>
          <h4>Price per session: {studioDetails.rental_price}</h4>
        </form>
        <Link to="/schedule">
          <button>Book</button>
          </Link>
      </div>
    </>
  );
};

export default StudiosDetailsPage;
