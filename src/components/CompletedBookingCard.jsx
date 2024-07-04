import React from 'react';
import RatingStudiosCard from './RatingStudiosCard';
const CompletedBookingCard = ({ formatTime, booking }) => {
	const { studio } = booking;
	return (
		<div className="teachers-page">
			{booking && studio && (
				<div className="teacher-card">
					<p>
						<strong>{studio.studio_name}</strong>, at {studio.address}, every{' '}
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
