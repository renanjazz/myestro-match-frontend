import axios from 'axios';
import React from 'react';
import { API_URL } from '../config';

const ScheduleCard = ({ schedule, handleDelete }) => {
	const formatTime = (time) => {
		const timeStr = time.toString(); 
		if (timeStr.length === 4) {
			return timeStr.slice(0, 2) + ':' + timeStr.slice(2);
		}else if(timeStr.length===3){
      return "0" + timeStr.slice(0, 1) + ':' + timeStr.slice(1);
    }
		return timeStr; 
	};

  const handleDeleteSchedule = async () => {
    try {
      await axios.delete(`${API_URL}/schedule/api/class-schedule/${schedule._id}`);
      handleDelete(schedule._id);
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  const handleUpdateSchedule = async () => {
    try {
      
      } catch (error) {
      
    }
  };

  const handleCompleteSchedule = async () => {
    try {
      await axios.put(`${API_URL}/schedule/api/class-schedule/${schedule._id}`, { status: "Completed" });
      handleDelete(schedule._id);
    } catch (error) {
      console.error('Error completing schedule:', error);
    }
  };

	return (
		<div className="teachers-page">
			{schedule && schedule.teacher && (
				<div className="teacher-card">
					<p>
						<strong>{schedule.teacher.fullname}</strong>, {schedule.teacher.instrument}, every {schedule.day_of_week} at {formatTime(schedule.start_time)}
					</p>
					{Array.isArray(schedule.teacher.attendance_type) &&
						schedule.teacher.attendance_type.map((atteType, index) => (
							<p key={index}>{atteType}</p>
						))}
					<p>Status: {schedule.status}</p>
					<br />
					<div>
						<button className="teacher-page-button" onClick={handleDeleteSchedule}>Cancel class</button>
						<button className="teacher-page-button" onClick={handleUpdateSchedule}>Change time</button>
            <button className="teacher-page-button" onClick={handleCompleteSchedule}>Mark as complete</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ScheduleCard;