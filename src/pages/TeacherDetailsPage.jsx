import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const TeacherDetailsPage = ({formatTime}) => {
  const { teacherId } = useParams();
  const [teacherDetails, setTeacherDetails] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [choosenDay, setChoosenDay] = useState(null);
  const [errora, setErrora] = useState(null);
  const { currUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useNavigate();

  console.log(teacherId);

   useEffect(() => {
    setErrora(null);
    const fetchTeacher = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/teachers/api/teachers/${teacherId}`
        );
        console.log("This is the teacher data", data);
        setTeacherDetails(data);
        setAvailability(data.availability);
        console.log(teacherDetails);
      } catch (error) {
        console.log("Error fetching the teacher", error);
      }
    };
    fetchTeacher();
  }, [teacherId]);

  if (!teacherDetails) {
    return <div>Loading...</div>;
  }

  async function handleBooking() {
    try {
      const { start_time, day_of_week, _id } = choosenDay;
      await axios.post(`${API_URL}/schedule/api/class-schedule`, {
        user: currUser._id,
        teacher: teacherId,
        start_time,
        day_of_week,
        availability: _id,
      });

      setAvailability((prevAvailability) =>
        prevAvailability.map((slot) =>
          slot._id === _id ? { ...slot, reserved: true } : slot
        )
      );
      setChoosenDay(null);
      setIsModalOpen(false);
      nav("/schedule");
      alert("Booking confirmed!");
    } catch (error) {
      setErrora("Error booking the date. Please try again.");
      alert("Error booking the date. Please try again.");
      console.log(error);
    }
  }

  const openModal = () => {
    if (!currUser) {
      setErrora("You need to log in to book a session");
      alert("You need to log in to book a session");
      return;
    }

    if (choosenDay) {
      setIsModalOpen(true);
    } else {
      setErrora("Please choose a time date to book");
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>
      <div className="teacher-studio-details">
        <h2>{teacherDetails.fullname}</h2>
        <div className="image-box">
		<img className="teacher-studio-picture"
          src={teacherDetails.picture}
          alt={teacherDetails.fullname}
        />
		</div>
        <h3>{teacherDetails.rating}</h3>
        <h3 className="about-me">About me:</h3>
        <p className="teacher-studio-details-text">{teacherDetails.description}</p>
        <p className="teacher-studio-details-text">
          <strong>Email:</strong> {teacherDetails.email}
        </p>
        <p className="teacher-studio-details-text">
          <strong>Instrument:</strong> {teacherDetails.instrument}
        </p>
        <p className="teacher-studio-details-text">
          <strong>Price/hour:</strong> {teacherDetails.price_per_session}€
        </p>
        <p className="teacher-studio-details-text">
          <strong>Attendance type:</strong> {teacherDetails.attendance_type}
        </p>
        <h3>Available dates:</h3>
        <div className="available-dates">
          {availability.length > 0 ? (
            availability
              .filter((date) => !date.reserved)
              .map((date) => (
                <div key={date._id}>
                  <button
                    className="available-dates-button"
                    onClick={() => setChoosenDay(date)}
                  >
                    {date.day_of_week} - {formatTime(date.start_time)}
                  </button>
                </div>
              ))
          ) : (
            <p className="error-message">No available dates</p>
          )}
        </div>
        {choosenDay && (
          <div>
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Confirm booking</h2>
                  {choosenDay && (
                    <>
                      <p>
                        Do you want to book a session with <strong>{teacherDetails.fullname} </strong> on{" "}
                        {choosenDay.day_of_week} at{" "}
                        {formatTime(choosenDay.start_time)} for{" "}
                        {teacherDetails.price_per_session}€/session?
                      </p>
					  <div className="modal-buttons">
                      <button className="modal-button" onClick={handleBooking}>Confirm</button>
                      <button className="modal-button" onClick={closeModal}>Cancel</button>
					  </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <br />

        <br />
		<div className="book-back-box">
        <button className="book-back-button" onClick={openModal}>
          Book session
        </button>
        <br />
		<Link to={"/teacher"}>
		<button className="book-back-button">
          Back
        </button>
		</Link>
		</div>
        <br />
        <div>{errora && <p className="error-message">{errora}</p>}</div>

        <br />
      </div>
    </>
  );
};

export default TeacherDetailsPage;
