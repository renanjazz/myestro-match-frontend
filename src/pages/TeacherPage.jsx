import React, { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { useState } from "react";
import TeacherCard from "../components/TeacherCard";

const TeacherPage = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers= async () => {
      try {
        const { data } = await axios.get(`${API_URL}/teachers/api/teachers`);
        console.log("These are the teachers", data);
        setTeachers(data);
        console.log (teachers);
      } catch (error) {
        console.log("Error fetching the teachers", error);
      }
    };
    fetchTeachers();
  }, []);

  return (
    <>
    <div className="teachers-page">
      <h2>Teachers</h2>
      <h4>{teachers.length} teachers found</h4>
      {teachers.map((teacher)=><TeacherCard key={teacher._id} teacher={teacher} />)}
    </div>
    </>
  );
};

export default TeacherPage;