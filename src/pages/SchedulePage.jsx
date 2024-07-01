import React, { useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { useState } from 'react';
import ScheduleCard from '../components/ScheduleCard';

const SchedulePage = () => {
	const [schedule, setSchedule] = useState([]);

	useEffect(() => {
		const fetchSchedule = async () => {
			try {
				const { data } = await axios.get(
					`${API_URL}/schedule/api/class-schedule`
				);
				console.log('These is the schedule', data);
				setSchedule(data);
				console.log(schedule);
			} catch (error) {
				console.log('Error fetching the schedule', error);
			}
		};
		fetchSchedule();
	}, []);

	return (
		<>
			<div>
				<h2>My Bookings</h2>
				<h4>Upcoming {schedule.length}</h4>
				<h4>
					
					{schedule.map((schedule) => (
						<ScheduleCard
							key={schedule._id}
							schedule={schedule}
						/>
					))}
				</h4>
				<h2>Past Bookings</h2>
				<button>See Favourites</button>
			</div>
		</>
	);
};

export default SchedulePage;
