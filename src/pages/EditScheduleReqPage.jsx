import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config';
import { AuthContext } from '../context/auth.context';

const EditScheduleReqPage = ({formatTime}) => {
  const { id } = useParams(); 
  const { currUser } = useContext(AuthContext);
  const [schedule, setSchedule] = useState(null);
  const [teacherDetails, setTeacherDetails] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [chosenDay, setChosenDay] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/schedule/api/class-schedule/${id}`);
        setSchedule(data);

        
        const teacherId = data.teacher._id;
        const teacherData = await axios.get(`${API_URL}/teachers/api/teachers/${teacherId}`);
        setTeacherDetails(teacherData.data);
        setAvailability(teacherData.data.availability);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSchedule();
  }, [id]);

  const handleUpdateSchedule = async () => {
    if (!chosenDay) {
      setError('Please select a new date and time');
      return;
    }

    try {
      const { start_time, day_of_week, _id } = chosenDay;
      await axios.put(`${API_URL}/schedule/api/class-schedule/${id}`, {
        start_time,
        day_of_week,
        availability: _id,
      });

      setAvailability((prevAvailability) =>
        prevAvailability.map((slot) =>
          slot._id === _id ? { ...slot, reserved: true } : slot
        )
      );

      alert('Schedule updated successfully!');
      nav('/schedule'); 
    } catch (error) {
      setError('Error updating the schedule. Please try again.');
      console.error('Error updating schedule:', error);
    }
  };

 function handleCancel(){
  nav("/schedule")
 }

  if (!schedule || !teacherDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Schedule Date</h1>
      <h2>Current Schedule</h2>
      <p>
        {schedule.teacher.fullname} - {schedule.day_of_week} at {formatTime(schedule.start_time)}
      </p>
      <h3>Available Dates</h3>
      <div className="available-dates">
        {availability.length > 0 ? (
          availability
            .filter((date) => !date.reserved)
            .map((date) => (
              <div key={date._id}>
                <button
                  className="available-dates-button"
                  onClick={() => setChosenDay(date)}
                >
                  {date.day_of_week} - {formatTime(date.start_time)}
                </button>
              </div>
            ))
        ) : (
          <p>No available dates</p>
        )}
      </div>
      <br />
      <button className="teacher-page-button" onClick={handleUpdateSchedule}>
        Update Schedule
      </button>
      <button className="teacher-page-button" onClick={handleCancel}>Cancel</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EditScheduleReqPage