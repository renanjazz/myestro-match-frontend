import React from 'react';
import RatingStudiosCard from './RatingStudiosCard';
const CompletedBookingCard = ({ formatTime, booking, handleRatingUpdate }) => {
	const { studio } = booking;
	return (
		<div className="teacher-studio-card">
			{booking && studio && (
				<div className="teacher-card">
					<p>
						<strong>{studio.studio_name}</strong>, at {studio.address}, every{' '}
						{booking.day_of_week} at {formatTime(booking.start_time)}
					</p>

					<p>Status: {booking.status}</p>
					<br />
					<RatingStudiosCard studio={studio} handleRatingUpdate={handleRatingUpdate}/>
				</div>
			)}
		</div>
	);
};

export default CompletedBookingCard;
