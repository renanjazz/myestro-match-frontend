import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import { AuthContext } from '../context/auth.context.jsx';

const EditUserPage = ({ profileUser, setProfileUser }) => {
  const { currUser } = useContext(AuthContext);
  const [fullname, setFullname] = useState(profileUser.fullname);
  const [username, setUsername] = useState(profileUser.username);
  const [email, setEmail] = useState(profileUser.email);
  const [phoneNumber, setPhoneNumber] = useState(profileUser.phone_number);
  const [experienceLevel, setExperienceLevel] = useState(profileUser.experience_level);
  const [instrument, setInstrument] = useState(profileUser.instrument);
  const [userImage, setUserImage] = useState(profileUser.userImage);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    console.log(profileUser);
  }, [profileUser]);

  const handleEditUser = async (e) => {
    e.preventDefault();
    setError(null);

    const formData = await new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('experience_level', experienceLevel);
    formData.append('instrument', instrument);
    if (userImage) {
      formData.append('userImage', userImage);
    }

    try {
      const {data} = await axios.patch(
        `${API_URL}/users/api/users/${currUser._id}`,
        formData
      );
      console.log('User updated:', data);
      setProfileUser(data)
      nav('/profile');
    } catch (error) {
      console.error('Error updating user:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Edit your user info</h1>
      <form onSubmit={handleEditUser} className="sign-up-form">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            placeholder="gollum.sucks@lotr.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            placeholder="BetterThanGollum"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Fullname:
          <input
            name="fullname"
            type="text"
            value={fullname}
            placeholder="Smeagol"
            onChange={(event) => setFullname(event.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            name="phone_number"
            type="text"
            value={phoneNumber}
            placeholder="123-456-7890"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>
          Experience Level:
          <select
            name="experience_level"
            value={experienceLevel}
            onChange={(event) => setExperienceLevel(event.target.value)}
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <label>
          Instrument:
          <input
            name="instrument"
            type="text"
            value={instrument}
            onChange={(event) => setInstrument(event.target.value)}
          />
        </label>
        <label>
          Profile picture:
          <input
            name="image"
            type="file"
            onChange={(event) => setUserImage(event.target.files[0])}
          />
        </label>
        <label>
          <input
            name="image"
            type="text"
            value={userImage}
            onChange={(event) => setUserImage(event.target.value)}
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Update Info</button>
      </form>
      <br />
    </div>
  );
};

export default EditUserPage;
