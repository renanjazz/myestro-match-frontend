import React from "react";

const BookingCard = ({ formatTime, booking }) => {
  return (
    <div className="teachers-page">
      {booking && booking.studio && (
        <div className="teacher-card">
          <p>
            <strong>{booking.studio.studio_name}</strong>, Address:
            {booking.studio.address}, every {booking.date}
          </p>

          <p>Status: {booking.status}</p>
          <br />
          <div>
            <button className="teacher-page-button">Cancel Booking</button>
            <button className="teacher-page-button">Change date</button>
            <button className="teacher-page-button">Mark as complete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
