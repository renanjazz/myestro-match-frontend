import React from 'react'

const CompletedBookingCard = ({ formatTime, booking }) => {
  const {studio} = booking
	return (
		<div className="teacher-studio-card">
			{booking && studio && (
				<div className="teacher-card">
					<p>
						<strong>{studio.studio_name}</strong>, at{' '}
						{studio.address}, every {booking.day_of_week} at{' '}
						{formatTime(booking.start_time)}
					</p>
					<p>Status: {booking.status}</p>					
				</div>
			)}
		</div>
	);
};

export default CompletedBookingCard
