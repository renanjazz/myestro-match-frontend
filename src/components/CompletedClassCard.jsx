import React from "react";

const CompletedClassCard = ({ schedule, formatTime }) => {
  const {teacher} = schedule
  return (
    <div className="teachers-page">
      {schedule && teacher && (
        <div className="teacher-card">
          <p>
            {teacher.fullname}, {teacher.instrument}, every{" "}
            {schedule.day_of_week} at {formatTime(schedule.start_time)}
          </p>
          {Array.isArray(teacher.attendance_type) &&
            teacher.attendance_type.map((atteType, index) => (
              <p key={index}>{atteType}</p>
            ))}
          <p>Status: {schedule.status}</p>
          <br />
        </div>
      )}
    </div>
  );
};
export default CompletedClassCard;
