import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const TeacherDetailsPage = () => {
  const [teacherDetails, setTeacherDetails] = useState([]);

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/api/teachers/:teacherId`
        );
        console.log("These is the teacher data", data);
        setTeacherDetails(data);
        console.log(teacherDetails);
      } catch (error) {
        console.log("Error fetching the teacher", error);
      }
    };
    fetchTeacher();
  }, []);

  return (
    <>
      <div className="teacher-details">
        <h2>{teacher.fullname}</h2>
        <h5>
          Email: {teacher.email}
          Instrument:
          {teacher.instrument}
        </h5>
        <h5>Presence: {teacher.attendance_type}</h5>
        <h5>Rating: {teacher.rating}</h5>
        <Link to="/teacher-details">
          <button>Know more</button>
        </Link>
      </div>
    </>
  );
};

export default TeacherDetailsPage;
