import React from "react";
import { Link } from "react-router-dom";

const TeacherCard = ({ teacher }) => {
  return (
    <>
      <div className="teacher-studio-card">
        <h3>{teacher.fullname}</h3>
        <p>
          Instrument: {teacher.instrument}
        </p>
        <p>Presence: {teacher.attendance_type}</p>
        <Link to={`/teacher/${teacher._id}`}>
          <button className="teacher-page-button">Know more</button>
        </Link>
      </div>
    </>
  );
};

export default TeacherCard;