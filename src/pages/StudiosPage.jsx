import React, { useEffect } from "react";
import StudioCard from "../components/StudioCard";
import axios from "axios";
import { API_URL } from "../../config";
import { useState } from "react";

const StudiosPage = () => {
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/studios/api/studios`);
        console.log("These are the studios", data);
        setStudios(data);
        console.log(studios);
      } catch (error) {
        console.log("Error fetching the studios", error);
      }
    };
    fetchStudios();
  }, []);

  return (
    <>
      <div className="teacher-studio-page">
        <h2>Studios</h2>
        <h4>{studios.length} studios found</h4>
        {studios.map((studio) => (
          <StudioCard key={studio._id} studio={studio} />
        ))}
      </div>
    </>
  );
};

export default StudiosPage;
