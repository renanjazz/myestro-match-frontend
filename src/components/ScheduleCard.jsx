import axios from 'axios';
import React from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const ScheduleCard = ({
	schedule,
	handleDelete,
	formatTime,
	handleComplete,
}) => {
	const nav = useNavigate();

	const handleDeleteSchedule = async () => {
		try {
			await axios.delete(
				`${API_URL}/schedule/api/class-schedule/${schedule._id}`
			);
			handleDelete(schedule._id);
		} catch (error) {
			console.error('Error deleting schedule:', error);
		}
	};

	const handleCompleteSchedule = async () => {
		try {
		  const { data: updatedSchedule } = await axios.patch(
			`${API_URL}/schedule/api/class-schedule/${schedule._id}`,
			{ status: "Archived" }
		  );
		  handleComplete(updatedSchedule);
		} catch (error) {
		  console.error("Error completing schedule:", error);
		}
	  };

	function handleMoveToUpdate() {
		nav(`/edit-schedule-date/${schedule._id}`);
	}

	return (
		<div className="teachers-page">
			{schedule && schedule.teacher && (
				<div className="teacher-card">
					<p>
						<strong>{schedule.teacher.fullname}</strong>,{' '}
						{schedule.teacher.instrument}, every {schedule.day_of_week} at{' '}
						{formatTime(schedule.start_time)}
					</p>
					{Array.isArray(schedule.teacher.attendance_type) &&
						schedule.teacher.attendance_type.map((atteType, index) => (
							<p key={index}>{atteType}</p>
						))}
					<p>Status: {schedule.status}</p>
					<br />
					<div>
						<button
							className="teacher-page-button"
							onClick={handleDeleteSchedule}
						>
							Cancel class
						</button>
						<button
							className="teacher-page-button"
							onClick={handleMoveToUpdate}
						>
							Change time
						</button>
						<button
							className="teacher-page-button"
							onClick={handleCompleteSchedule}
						>
							Mark as complete
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ScheduleCard;
