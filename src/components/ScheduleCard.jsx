import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const ScheduleCard = ({
	schedule,
	handleDelete,
	formatTime,
	handleComplete,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
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

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			{schedule && schedule.teacher && (
				<div className="teacher-studio-card">
					<p>
						<strong>{schedule.teacher.fullname}</strong>,{' '}
						{schedule.teacher.instrument}, every {schedule.day_of_week} at{' '}
						{formatTime(schedule.start_time)}
					</p>
					{Array.isArray(schedule.teacher.attendance_type) &&
						schedule.teacher.attendance_type.map((atteType, index) => (
							<p key={index}>Attendance type: {atteType}</p>
						))}
					<p>Status: {schedule.status}</p>
					<div>
						<button
							className="schedule-page-button"
							onClick={handleDeleteSchedule}
						>
							Cancel
						</button>
						<button
							className="schedule-page-button"
							onClick={handleMoveToUpdate}
						>
							Change time
						</button>
						<button
							className="schedule-page-button"
							onClick={openModal}
						>
							Archive
						</button>
					</div>
				</div>
			)}
			{/* Modal */}
			{isModalOpen && (
				<div  className="modal-overlay">
					<div className="modal">
						<p>Do you really want to archive this schedule?</p>
						<div className="modal-buttons">
							<button
								className="modal-button"
								onClick={handleCompleteSchedule}
							>
								Confirm
							</button>
							<button
								className="modal-button"
								onClick={closeModal}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ScheduleCard;
