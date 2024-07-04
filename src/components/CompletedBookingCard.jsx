import React from 'react';
import RatingStudiosCard from './RatingStudiosCard';
import { NavLink } from 'react-router-dom';

const CompletedBookingCard = ({ formatTime, booking }) => {
	const { studio } = booking;
	return (
		<div className="teacher-studio-card">
			{booking && studio && (
				<div className="teacher-card">
					<p>
						<NavLink to={`/studios/${studio._id}`} className={"teacher-studio-name-link"}><strong>{studio.studio_name}</strong></NavLink>, at {studio.address}, every{' '}
						{booking.day_of_week} at {formatTime(booking.start_time)}
					</p>

					<p>Status: {booking.status}</p>
					<br />
					<RatingStudiosCard studio={studio}/>
				</div>
			)}
		</div>
	);
};

export default CompletedBookingCard;
