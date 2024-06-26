import React from "react";

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
        <button>Book</button>
      </div>
    </>
  );
};

export default TeacherCard;
