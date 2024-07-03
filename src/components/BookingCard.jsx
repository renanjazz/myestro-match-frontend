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

	const handleCompleteBooking = async () => {
		try {
			const { data: updatedBooking } = await axios.patch(
				`${API_URL}/bookings/api/studio-booking/${booking._id}`,
				{ status: "Archived" }
			);
			handleBookingComplete(updatedBooking);
		} catch (error) {
			console.error('Error completing booking:', error);
		}
	};

	function handleMoveToUpdate() {
		nav(`/edit-booking-date/${booking._id}`);
	}
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
						<button onClick={handleDeleteBooking} className="teacher-page-button">Cancel Booking</button>
						<button onClick={handleMoveToUpdate} className="teacher-page-button">Change date</button>
						<button onClick={handleCompleteBooking} className="teacher-page-button">Mark as complete</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingCard;
