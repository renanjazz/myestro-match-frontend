import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const TeacherDetailsPage = () => {
  const { teacherId } = useParams();
  const [teacherDetails, setTeacherDetails] = useState([]);
  console.log(teacherId);
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/teachers/api/teachers/${teacherId}`
        );
        console.log("These is the teacher data", data);
        setTeacherDetails(data);
        console.log(teacherDetails);
      } catch (error) {
        console.log("Error fetching the teacher", error);
      }
    };
    fetchTeacher();
  }, [teacherId]);

  return (
    <>
      <div className="teacher-details">
        <form>
          <h2>{teacherDetails.fullname}</h2>
          {teacherDetails.picture}
          <h4>
            Instrument:
            {teacherDetails.instrument}
          </h4>
          <h5>Description: {teacherDetails.description}</h5>
          <h5>Presence: {teacherDetails.attendance_type}</h5>
          <h5>Rating: {teacherDetails.rating}</h5>
          <h5>Email: {teacherDetails.email} </h5>
          <h5>Availability: {teacherDetails.availability}</h5>
          <h4>Price per session: {teacherDetails.price_per_session}</h4>
        </form>
        <Link to="/schedule">
          <button>Book</button>
          </Link>
      </div>
    </>
  );
};

export default TeacherDetailsPage;
