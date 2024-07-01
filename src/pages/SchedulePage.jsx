import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import ScheduleCard from '../components/ScheduleCard';
import CanceledScheduleCard from '../components/CanceledScheduleCard';
import CompletedClassCard from '../components/CompletedClassCard';

const SchedulePage = () => {
	const [scheduledBookings, setScheduledBookings] = useState([]);
	const [canceledBookings, setCanceledBookings] = useState([]);
	const [completedBookings, setCompletedBookings] = useState([]);

	useEffect(() => {
		const fetchSchedule = async () => {
			try {
				const { data } = await axios.get(
					`${API_URL}/schedule/api/class-schedule`
				);
				console.log('These is the schedule', data);

				const scheduled = data.filter((item) => item.status === 'Scheduled');
				const canceled = data.filter((item) => item.status === 'Canceled');
				const completed = data.filter((item) => item.status === 'Completed');
				setScheduledBookings(scheduled);
				setCanceledBookings(canceled);
				setCompletedBookings(completed);
			} catch (error) {
				console.log('Error fetching the schedule', error);
			}
		};
		fetchSchedule();
	}, []);

	const handleDelete = (id) => {
		setScheduledBookings(
			scheduledBookings.filter((schedule) => schedule._id !== id)
		);
		setCanceledBookings(
			canceledBookings.filter((schedule) => schedule._id !== id)
		);
		setCompletedBookings(
			completedBookings.filter((schedule) => schedule._id !== id)
		);
	};

	return (
		<>
			<div>
				<h2>My Schedule</h2>

				<h4>Upcoming classes {scheduledBookings.length}</h4>
				{scheduledBookings.map((schedule) => (
					<ScheduleCard
						key={schedule._id}
						schedule={schedule}
						handleDelete={handleDelete}
					/>
				))}

				<h2>Past Classes</h2>
				<h4>Completed {completedBookings.length}</h4>
				{completedBookings.map((schedule) => (
					<CompletedClassCard
						key={schedule._id}
						schedule={schedule}
					/>
				))}

				<button>See Favourites</button>
			</div>
		</>
	);
};

export default SchedulePage;
