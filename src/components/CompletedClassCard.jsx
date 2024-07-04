import React from 'react';
import RatingTeachersCard from './RatingTeachersCard';
import { NavLink } from 'react-router-dom';

const CompletedClassCard = ({ schedule, formatTime }) => {
	const { teacher } = schedule;
	return (
		<div>
			{schedule && teacher && (
				<div className="teacher-studio-card">
					<p>
						<NavLink to={`/teacher/${teacher._id}`} className={"teacher-studio-name-link"}><strong>{teacher.fullname}</strong></NavLink>, {teacher.instrument}, every{' '}
						{schedule.day_of_week} at {formatTime(schedule.start_time)}
					</p>
					{Array.isArray(teacher.attendance_type) &&
						teacher.attendance_type.map((atteType, index) => (
							<p key={index}>Attendance type: {atteType}</p>
						))}
					<p>Status: {schedule.status}</p>
					<br />
					<RatingTeachersCard
						teacher={teacher}
						
					/>
				</div>
			)}
		</div>
	);
};
export default CompletedClassCard;
