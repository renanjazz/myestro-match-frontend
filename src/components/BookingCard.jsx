import axios from 'axios';
import React from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const BookingCard = ({ formatTime, booking, handleBookingDelete, handleBookingComplete }) => {
	const nav = useNavigate()

	return (
		<div className="teachers-page">
			{booking && booking.studio && (
				<div className="teacher-card">
					<p>
						<strong>{booking.studio.studio_name}</strong>, at{' '}
						{booking.studio.address}, every {booking.day_of_week} at{' '}
						{formatTime(booking.start_time)}
					</p>

					<p>Status: {booking.status}</p>
					<br />
					<div>
						<button className="teacher-page-button">Cancel Booking</button>
						<button className="teacher-page-button">Change date</button>
						<button className="teacher-page-button">Mark as complete</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingCard;
