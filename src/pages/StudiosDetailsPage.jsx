import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

const StudiosDetailsPage = ({ formatTime }) => {
  const { studioId } = useParams();
  const [studioDetails, setStudioDetails] = useState([]);
  const [slots, setSlots] = useState([]);
  const [chosenDay, setChosenDay] = useState(null);
  const [error, setError] = useState(null);
  const { currUser } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nav = useNavigate();

  console.log(studioId);

  useEffect(() => {
    setError(null);
    const fetchStudio = async () => {
      try {
        const { data } = await axios.get(
          `${API_URL}/studios/api/studios/${studioId}`
        );
        console.log("This is the studio data", data);
        setStudioDetails(data.foundStudio);
        setSlots(data.foundStudio.slot);
        console.log(data);
        console.log(data.foundStudio);
        console.log("This is after setting the useState", studioDetails);
      } catch (error) {
        console.log("Error fetching the studio", error);
      }
    };
    fetchStudio();
  }, [studioId]);

  if (!studioDetails) {
    return <div>Loading...</div>;
  }

  async function handleBooking() {
    try {
      const { start_time, day_of_week, _id } = chosenDay;
      await axios.post(`${API_URL}/bookings/api/studio-booking`, {
        user: currUser._id,
        studio: studioId,
        start_time,
        day_of_week,
        slot: _id,
      });
      console.log(slots);
      setSlots((prevSlots) =>
        prevSlots.map((slot) =>
          slot._id === _id ? { ...slot, reserved: true } : slot
        )
      );
      setChosenDay(null);
      setIsModalOpen(false);
      nav("/schedule");
    } catch (error) {
      setError("Error booking the date. Please try again.");
      alert("Error booking the date. Please try again.");
      console.log(error);
    }
  }

  const openModal = () => {
    if (!currUser) {
      setError("You need to log in to book a session");
      alert("You need to log in to book a session");
      return;
    }

    if (chosenDay) {
      setIsModalOpen(true);
    } else {
      setError("Please choose a time date to book");
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="teacher-studio-details">
        <h2>{studioDetails.studio_name}</h2>
        <div className="image-box">
        <img className="teacher-studio-picture"
          src={studioDetails.picture} 
          alt={studioDetails.studio_name} />
        </div>
        <p className="teacher-studio-details-text"><strong>Address:</strong> {studioDetails.address}</p>
        <br/>
        <p className="teacher-studio-details-text"><strong>Description:</strong> {studioDetails.description}</p>
        <br/>
        <p className="teacher-studio-details-text"><strong>Rating:</strong> {studioDetails.rating}</p>
        <br/>
        <p className="teacher-studio-details-text"><strong>Email:</strong> {studioDetails.contact_email} </p>
        <br/>
        <p className="teacher-studio-details-text"><strong>Phone:</strong> {studioDetails.contact_phone}</p>
        <br/>
        <p className="teacher-studio-details-text"><strong>Price per session:</strong> {studioDetails.rental_price}</p>
        <br/>
        <p className="teacher-studio-details-text"><strong>Available dates (weekly):</strong></p>
        <br/>
        <div className="available-dates">
          {slots.length > 0 ? (
            slots
              .filter((date) => !date.reserved)
              .map((date) => (
                <div key={date._id}>
                  <button className="available-dates-button" onClick={() => setChosenDay(date)}>
                    {date.day_of_week} - {formatTime(date.start_time)}
                  </button>
                </div>
              ))
          ) : (
            <p className="error-message">No available dates</p>
          )}
        </div>
        {chosenDay && (
          <div>

            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Confirm booking</h2>
                  {chosenDay && (
                    <>
                      <p>
                        Do you want to book a session at <strong>{studioDetails.studio_name} </strong> on {chosenDay.day_of_week}{" "}
                        at {formatTime(chosenDay.start_time)} for{" "}
                        {studioDetails.rental_price}€/session?
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
        <button className="book-back-button" onClick={openModal}>Book session</button>
        <br />
        <Link to={"/studios"}>
        <button className="book-back-button">
          Back
        </button>
        </Link>
        </div>
        <br />

        <div>{error && <p className="error-message">{error}</p>}</div>

        <br />
      </div>
    </>
  );
};

export default StudiosDetailsPage;
