import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config';


const EditBookingReqPage = ({formatTime}) => {
  const { id } = useParams(); 
  const [booking, setBooking] = useState(null);
  const [studioDetails, setStudioDetails] = useState(null);
  const [slots, setSlots] = useState([]);
  const [chosenDay, setChosenDay] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchbooking = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/bookings/api/studio-booking/${id}`);
        setBooking(data); 
        console.log(data)       
        const studioId = data.studio._id;
        const studioData = await axios.get(`${API_URL}/studios/api/studios/${studioId}`);
        setStudioDetails(studioData.data);
        console.log("this is studio data", studioData)
        setSlots(studioData.data.foundStudio.slot);
        console.log("this is slot", studioData.data.foundStudio.slot)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchbooking();
  }, [id]);

  const handleUpdatebooking = async () => {
    if (!chosenDay) {
      setError('Please select a new date and time');
      return;
    }

    try {
      const { start_time, day_of_week, _id } = chosenDay;
      await axios.put(`${API_URL}/bookings/api/studio-booking/${id}`, {
        start_time,
        day_of_week,
        slot: _id,
      });

      setSlots((prevSlots) =>
        prevSlots.map((slot) =>
          slot._id === _id ? { ...slot, reserved: true } : slot
        )
      );

      alert('Booking updated successfully!');
      nav('/schedule'); 
    } catch (error) {
      setError('Error updating the booking. Please try again.');
      console.error('Error updating booking:', error);
    }
  };

 function handleCancel(){
  nav("/schedule")
 }

  if (!booking || !studioDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit booking date</h1>
      <h2>Current booking</h2>
      <p>
        {studioDetails.studio_name} - {booking.day_of_week} at {formatTime(booking.start_time)}
      </p>
      <h3>Available Dates</h3>
      <div className="available-dates">
        {slots?.length > 0 ? (
          slots
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
      <button className="teacher-page-button" onClick={handleUpdatebooking}>
        Update booking
      </button>
      <button className="teacher-page-button" onClick={handleCancel}>Cancel</button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default EditBookingReqPage