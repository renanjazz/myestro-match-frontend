import React from "react";
import { Link } from "react-router-dom";

const TeacherCard = ({ teacher }) => {
  return (
    <>
      <div className="teacher-card">
        <h2>{teacher.fullname}</h2>
        <h5>
          Instrument:
          {teacher.instrument}
        </h5>
        <h5>Presence: {teacher.attendance_type}</h5>
        <h5>Rating: {teacher.rating}</h5>
        <Link to={`/teacher/${teacher._id}`}>
          <button>Know more</button>
        </Link>
      </div>
    </>
  );
};

export default TeacherCard;
