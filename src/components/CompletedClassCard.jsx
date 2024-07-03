import React from "react";
import RatingCard from "./RatingCard";

const CompletedClassCard = ({ schedule, formatTime }) => {
  const {teacher} = schedule
  return (
    <div>
      {schedule && teacher && (
        <div className="teacher-studio-card">
          <p>
            <strong>{teacher.fullname}</strong>, {teacher.instrument}, every{" "}
            {schedule.day_of_week} at {formatTime(schedule.start_time)}
          </p>
          {Array.isArray(teacher.attendance_type) &&
            teacher.attendance_type.map((atteType, index) => (
              <p key={index}>Attendance type: {atteType}</p>
            ))}
          <p>Status: {schedule.status}</p>
          <br />
          <RatingCard entity={teacher} type="teacher"/>
        </div>
      )}
    </div>
  );
};
export default CompletedClassCard;
