import React from 'react';

const CompletedClassCard = ({ schedule, formatTime }) => {
	return (
		<div className="teachers-page">
			{schedule && schedule.teacher && (
				<div className="teacher-card">
					<p>
						{schedule.teacher.fullname}, {schedule.teacher.instrument}, every{' '}
						{schedule.day_of_week} at {formatTime(schedule.start_time)}
					</p>
					{Array.isArray(schedule.teacher.attendance_type) &&
						schedule.teacher.attendance_type.map((atteType, index) => (
							<p key={index}>{atteType}</p>
						))}
					<p>{schedule.teacher.price_per_session}€/session</p>
					<p>{schedule.status}</p>
					<br />
				</div>
			)}
		</div>
	);
};
export default CompletedClassCard;
