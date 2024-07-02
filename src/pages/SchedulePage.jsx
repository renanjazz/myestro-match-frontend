import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import ScheduleCard from "../components/ScheduleCard";
import { AuthContext } from "../context/auth.context.jsx";
import CompletedClassCard from "../components/CompletedClassCard";
import BookingCard from "../components/BookingCard.jsx";
import CompletedBookingCard from "../components/CompletedBookingCard.jsx";

const SchedulePage = ({ formatTime }) => {
  const { currUser } = useContext(AuthContext);
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [completedClasses, setCompletedClasses] = useState([]);
  const [scheduledBooking, setScheduledBookings] = useState([]);
  const [completedBooking, setCompletedBookings] = useState([]);

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
        console.log("This is the schedule", data);

        const scheduled = data.filter((item) => item.status === "Scheduled");

        const completed = data.filter((item) => item.status === "Completed");
        setScheduledClasses(scheduled);
        setCompletedClasses(completed);
      } catch (error) {
        console.log("Error fetching the schedule", error);
      }
    };

    fetchClasses();
  }, [currUser]);

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
        console.log("This is the booking", data);

        const booked = data.filter((item) => item.status === "Booked");

        const completed = data.filter((item) => item.status === "Completed");
        setScheduledBookings(booked);
        setCompletedBookings(completed);
      } catch (error) {
        console.log("Error fetching the booking", error);
      }
    };

    fetchBookings();
  }, [currUser]);

  const handleDelete = (id) => {
    setScheduledClasses(
      scheduledClasses.filter((schedule) => schedule._id !== id)
    );
    setCompletedClasses(
      completedClasses.filter((schedule) => schedule._id !== id)
    );
  };

  const handleComplete = (completedSchedule) => {
    setScheduledClasses(
      scheduledClasses.filter(
        (schedule) => schedule._id !== completedSchedule._id
      )
    );
    setCompletedClasses([...completedClasses, completedSchedule]);
  };

  return (
    <>
      <div>
        <h2>My Schedule</h2>

        <h3>Upcoming {scheduledClasses.length + scheduledBooking.length} </h3>
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
          />
        ))}

        {/* <h3>Completed {completedClasses.length}</h3>
        {completedClasses.map((schedule) => (
          <CompletedClassCard
            key={schedule._id}
            schedule={schedule}
            formatTime={formatTime}
          />
        ))} */}

        <button className="teacher-page-button">See Favourites</button>
      </div>
    </>
  );
};

export default SchedulePage;
