import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { useParams } from "react-router-dom";
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
      await axios.post(`${API_URL}/bookings/api/slot`, {
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
      alert("Booking confirmed!");
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
      <div className="studios-details">
        <h2>{studioDetails.studio_name}</h2>
        <img src={studioDetails.picture} alt={studioDetails.studio_name} />
        <h4>Address: {studioDetails.address}</h4>
        <h5>Description: {studioDetails.description}</h5>
        <h5>Rating: {studioDetails.rating}</h5>
        <h5>Email: {studioDetails.contact_email} </h5>
        <h5>Phone: {studioDetails.contact_phone}</h5>
        <h4>Price per session: {studioDetails.rental_price}</h4>
        <h3>Available dates:</h3>
        <div>
          {slots.length > 0 ? (
            slots
              .filter((date) => !date.reserved)
              .map((date) => (
                <div key={date._id}>
                  <button onClick={() => setChosenDay(date)}>
                    {date.day_of_week} - {formatTime(date.start_time)}
                  </button>
                </div>
              ))
          ) : (
            <p>No available dates</p>
          )}
        </div>
        {chosenDay && (
          <div>
            <h4>Chosen date:</h4>
            <p>
              {chosenDay.day_of_week} - {formatTime(chosenDay.start_time)}
            </p>
            {isModalOpen && (
              <div className="modal-overlay">
                <div className="modal">
                  <h2>Confirm Booking</h2>
                  {chosenDay && (
                    <>
                      <p>
                        Do you want to book a session on {chosenDay.day_of_week}{" "}
                        at {formatTime(chosenDay.start_time)} for{" "}
                        {studioDetails.rental_price}€/session?
                      </p>
                      <button onClick={handleBooking}>Confirm</button>
                      <button onClick={closeModal}>Cancel</button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <br />

        <br />
        <button onClick={openModal}>Book session</button>
        <br />
        <div>{error && <p className="error-message">{error}</p>}</div>

        <br />
      </div>
    </>
  );
};

export default StudiosDetailsPage;
