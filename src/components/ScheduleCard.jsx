import React from 'react';

const ScheduleCard = ({ schedule }) => {
	const formatTime = (time) => {
		const timeStr = time.toString(); 
		if (timeStr.length === 4) {
			return timeStr.slice(0, 2) + ':' + timeStr.slice(2);
		}
		return timeStr; 
	};

	return (
		<div className="teachers-page">
			{schedule && schedule.teacher && (
				<div className="teacher-card">
					<p>
						{schedule.teacher.fullname}, {schedule.teacher.instrument}, every {schedule.day_of_week} at {formatTime(schedule.start_time)}
					</p>
					{Array.isArray(schedule.teacher.attendance_type) &&
						schedule.teacher.attendance_type.map((atteType, index) => (
							<p key={index}>{atteType}</p>
						))}
					<p>{schedule.teacher.price_per_session}€/session</p>
					<p>{schedule.status}</p>
					<br />
					<div>
						<button>Cancel booking</button>
						<button>Update time</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ScheduleCard;