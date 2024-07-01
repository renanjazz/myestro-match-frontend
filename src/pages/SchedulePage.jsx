import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import ScheduleCard from '../components/ScheduleCard';
import { AuthContext } from '../context/auth.context.jsx';
import CompletedClassCard from '../components/CompletedClassCard';

const SchedulePage = ({ formatTime }) => {
	const { currUser } = useContext(AuthContext);
	const [scheduledBookings, setScheduledBookings] = useState([]);
	const [completedBookings, setCompletedBookings] = useState([]);

	useEffect(() => {
		const fetchSchedule = async () => {
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

				const completed = data.filter((item) => item.status === 'Completed');
				setScheduledBookings(scheduled);

				setCompletedBookings(completed);
			} catch (error) {
				console.log('Error fetching the schedule', error);
			}
		};

		fetchSchedule();
	}, [currUser]);

	const handleDelete = (id) => {
		setScheduledBookings(
			scheduledBookings.filter((schedule) => schedule._id !== id)
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
						formatTime={formatTime}
					/>
				))}

				<h2>Past Classes</h2>
				<h4>Completed {completedBookings.length}</h4>
				{completedBookings.map((schedule) => (
					<CompletedClassCard
						key={schedule._id}
						schedule={schedule}
						formatTime={formatTime}
					/>
				))}

				<button className="teacher-page-button">See Favourites</button>
			</div>
		</>
	);
};

export default SchedulePage;
