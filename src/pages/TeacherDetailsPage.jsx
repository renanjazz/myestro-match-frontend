import React, { useContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../config';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const TeacherDetailsPage = () => {
	const { teacherId } = useParams();
	const [teacherDetails, setTeacherDetails] = useState([]);
	const [availability, setAvailability] = useState([]);
	const [choosenDay, setChoosenDay] = useState(null);
	const [errora, setErrora] = useState(null);
	const { currUser } = useContext(AuthContext);
	console.log(teacherId);
	useEffect(() => {
		setErrora(null);
		const fetchTeacher = async () => {
			try {
				const { data } = await axios.get(
					`${API_URL}/teachers/api/teachers/${teacherId}`
				);
				console.log('This is the teacher data', data);
				setTeacherDetails(data);
				setAvailability(data.availability);
				console.log(teacherDetails);
			} catch (error) {
				console.log('Error fetching the teacher', error);
			}
		};
		fetchTeacher();
	}, [teacherId]);

	if (!teacherDetails) {
		return <div>Loading...</div>;
	}

	async function handleBooking() {
		if (!currUser) {
			setErrora('You need to log in to book a session');
			return;
		}

		if (!choosenDay) {
			setErrora('Please choose a time date to book');
			return;
		}

		try {
			const { start_time, day_of_week, _id } = choosenDay;
			await axios.post(`${API_URL}/schedule/api/class-schedule`, {
				user: currUser.id,
				teacher: teacherId,
				start_time,
				day_of_week,
				availability: _id,
			});

      setAvailability(prevAvailability =>
        prevAvailability.map(slot =>
          slot._id === _id ? { ...slot, reserved: true } : slot
        )
      );
      setChoosenDay(null)
			alert('Booking confirmed!');
		} catch (error) {
			setErrora('Error booking the date. Please try again.');
			console.log(error);
		}
	}

	return (
		<>
			<div className="teacher-details">
				<h2>{teacherDetails.fullname}</h2>
				<img
					src={teacherDetails.picture}
					alt={teacherDetails.fullname}
					style={{ height: '200px' }}
				/>
				<h3>{teacherDetails.rating}</h3>
				<h3>About me:</h3>
				<p>{teacherDetails.description}</p>
				<p>
					<strong>Email:</strong>
				</p>
				<p>{teacherDetails.email}</p>
				<p>
					<strong>Instrument:</strong>
				</p>
				<p>{teacherDetails.instrument}</p>
				<p>
					<strong>Price/hour</strong>
				</p>
				<p>{teacherDetails.price_per_session}€</p>
				<p>
					<strong>Attendance type</strong>
				</p>
				<p>{teacherDetails.attendance_type}</p>
				<h3>Available dates:</h3>
				<div>
					{availability.length > 0 ? (
						availability
							.filter((date) => !date.reserved)
							.map((date) => (
								<div key={date._id}>
									<button onClick={() => setChoosenDay(date)}>
										{date.day_of_week} - {date.start_time}
									</button>
								</div>
							))
					) : (
						<p>No available dates</p>
					)}
				</div>
				{choosenDay && (
					<div>
						<h4>Chosen date:</h4>
						<p>
							{choosenDay.day_of_week} - {choosenDay.start_time}
						</p>
					</div>
				)}

				{errora && <p className="error-message">{errora}</p>}
				<button onClick={handleBooking}>Book session</button>

				<br />
				<br />
			</div>
			<img
				src={teacherDetails.picture}
				alt={teacherDetails.fullname}
				style={{ height: '200px' }}
			/>
		</>
	);
};

export default TeacherDetailsPage;
