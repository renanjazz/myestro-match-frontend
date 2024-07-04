import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import ScheduleCard from '../components/ScheduleCard';
import { AuthContext } from '../context/auth.context.jsx';
import CompletedClassCard from '../components/CompletedClassCard';
import BookingCard from '../components/BookingCard.jsx';
import CompletedBookingCard from '../components/CompletedBookingCard.jsx';

const SchedulePage = ({ formatTime }) => {
	const { currUser } = useContext(AuthContext);
	const [scheduledClasses, setScheduledClasses] = useState([]);
	const [completedClasses, setCompletedClasses] = useState([]);
	const [scheduledBooking, setScheduledBookings] = useState([]);
	const [completedBooking, setCompletedBookings] = useState([]);
	//fetch classes info
	useEffect(() => {
		const fetchClasses = async () => {
			if (!currUser) return;

			try {
				const { data } = await axios.get(
					`${API_URL}/schedule/api/class-schedule`,
					{
						params: { userId: currUser._id },
					}
				);
				console.log('This is the schedule', data);

				const scheduled = data.filter((item) => item.status === 'Scheduled');

				const completed = data.filter((item) => item.status === 'Archived');
				setScheduledClasses(scheduled);
				setCompletedClasses(completed);
			} catch (error) {
				console.log('Error fetching the schedule', error);
			}
		};

		fetchClasses();
	}, [currUser]);
	//fetch booking info
	useEffect(() => {
		const fetchBookings = async () => {
			if (!currUser) return;

			try {
				const { data } = await axios.get(
					`${API_URL}/bookings/api/studio-booking`,
					{
						params: { userId: currUser._id },
					}
				);
				console.log('This is the booking', data);

				const booked = data.filter((item) => item.status === 'Booked');

				const completed = data.filter((item) => item.status === 'Archived');
				setScheduledBookings(booked);
				setCompletedBookings(completed);
			} catch (error) {
				console.log('Error fetching the booking', error);
			}
		};

		fetchBookings();
	}, [currUser]);

	//functions for the schedule(classes/teachers)
	const handleDelete = (id) => {
		setScheduledClasses(
			scheduledClasses.filter((schedule) => schedule._id !== id)
		);
	};

	const handleComplete = (completedSchedule) => {
		setScheduledClasses(
			scheduledClasses.filter(
				(schedule) => schedule._id !== completedSchedule._id
			)
		);
		setCompletedClasses((prevCompletedClasses) => [
			...prevCompletedClasses,
			completedSchedule,
		]);
	};

	//functions for the bookings(rentals/studios)

	function handleBookingDelete(id) {
		setScheduledBookings(
			scheduledBooking.filter((booking) => booking._id !== id)
		);
	}

	function handleBookingComplete(completedBooking) {
		setScheduledBookings(
			scheduledBooking.filter((booking) => booking._id !== completedBooking._id)
		);
		setCompletedBookings((previousbookings) => [
			...previousbookings,
			completedBooking,
		]);
	}
	return (
		<>
			<div className='general-page-margin'>
				<h2>My schedule</h2>

				<h3 className='ongoing-subheader'>Ongoing: {scheduledClasses.length + scheduledBooking.length} fixture(s)</h3>
				{scheduledClasses.map((schedule) => (
					<ScheduleCard
						key={schedule._id}
						schedule={schedule}
						handleDelete={handleDelete}
						handleComplete={handleComplete}
						formatTime={formatTime}
					/>
				))}
				{scheduledBooking.map((booking) => (
					<BookingCard
						key={booking._id}
						booking={booking}
						formatTime={formatTime}
						handleBookingDelete={handleBookingDelete}
						handleBookingComplete={handleBookingComplete}
					/>
				))}

				<h3 className='archived-subheader'>Archived: {completedClasses.length + completedBooking.length} fixture(s)</h3>
				{completedClasses.map((schedule) => (
					<CompletedClassCard
						key={schedule._id}
						schedule={schedule}
						formatTime={formatTime}
					/>
				))}
				{completedBooking.map((booking) => (
					<CompletedBookingCard
						key={booking._id}
						booking={booking}
						formatTime={formatTime}
					/>
				))}
			</div>
		</>
	);
};

export default SchedulePage;
