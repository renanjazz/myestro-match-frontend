import axios from 'axios';
import React from 'react';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const BookingCard = ({ formatTime, booking, handleBookingDelete, handleBookingComplete }) => {
	const nav = useNavigate()

	async function handleDeleteBooking(){
		try {
			await axios.delete(`${API_URL}/bookings/api/studio-booking/${booking._id}`)
			handleBookingDelete(booking._id)
		} catch (error) {
			console.error('Error deleting booking:', error);
		}
	}

	function handleMoveToUpdate() {
		nav(`/edit-booking-date/${booking._id}`);
	}
	return (
		<div>
			{booking && booking.studio && (
				<div className="teacher-studio-card">
					<p>
						<strong>{booking.studio.studio_name}</strong>, at{' '}
						{booking.studio.address}, every {booking.day_of_week} at{' '}
						{formatTime(booking.start_time)}
					</p>

					<p>Status: {booking.status}</p>
					<br />
					<div>
						<button onClick={handleDeleteBooking} className="schedule-page-button">Cancel</button>
						<button onClick={handleMoveToUpdate} className="schedule-page-button">Change time</button>
						<button className="schedule-page-button">Mark as complete</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingCard;
