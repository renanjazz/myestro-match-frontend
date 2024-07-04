import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const BookingCard = ({
	formatTime,
	booking,
	handleBookingDelete,
	handleBookingComplete,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const nav = useNavigate();

	const handleDeleteBooking = async () => {
		try {
			await axios.delete(
				`${API_URL}/bookings/api/studio-booking/${booking._id}`
			);
			handleBookingDelete(booking._id);
		} catch (error) {
			console.error('Error deleting booking:', error);
		}
	};

	const handleCompleteBooking = async () => {
		try {
			const { data: updatedBooking } = await axios.patch(
				`${API_URL}/bookings/api/studio-booking/${booking._id}`,
				{ status: 'Archived' }
			);
			handleBookingComplete(updatedBooking);
			setIsModalOpen(false);
		} catch (error) {
			console.error('Error completing booking:', error);
		}
	};

	const handleMoveToUpdate = () => {
		nav(`/edit-booking-date/${booking._id}`);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			{booking && booking.studio && (
				<div className="teacher-studio-card">
					<p>
						<NavLink to={`/studios/${booking.studio._id}`} className={"teacher-studio-name-link"}><strong>{booking.studio.studio_name}</strong></NavLink>, at{' '}
						{booking.studio.address}, every {booking.day_of_week} at{' '}
						{formatTime(booking.start_time)}
					</p>
					<p>Status: {booking.status}</p>
					<div>
						<button
							onClick={handleDeleteBooking}
							className="schedule-page-button"
						>
							Cancel
						</button>
						<button
							onClick={handleMoveToUpdate}
							className="schedule-page-button"
						>
							Change time
						</button>
						<button
							onClick={openModal}
							className="schedule-page-button"
						>
							Archive
						</button>
					</div>
				</div>
			)}
			{/* Modal */}
			{isModalOpen && (
				<div  className="modal-overlay">
					<div className="modal">
						<p>Do you really want to archive this booking?</p>
						<div className="modal-buttons">
							<button
								className="modal-button"
								onClick={handleCompleteBooking}
							>
								Confirm
							</button>
							<button
								className="modal-button"
								onClick={closeModal}
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default BookingCard;
