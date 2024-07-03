import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import { AuthContext } from '../context/auth.context.jsx';
import uploadimg from '../assets/upload-profile-pic.png';

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
      formData.append('imageUrl', userImage);
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
    <div className='general-page-margin'>
      <h2>Edit profile</h2>
      <form onSubmit={handleEditUser} className="signup-form">
        <label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <input
            name="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          <input
            name="fullname"
            type="text"
            value={fullname}
            placeholder="Fullname"
            onChange={(event) => setFullname(event.target.value)}
          />
        </label>
        <label>
          <input
            name="phone_number"
            type="text"
            value={phoneNumber}
            placeholder="Phone number"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>
          <select
            className='drop-down'
            name="experience_level"
            value={experienceLevel}
            onChange={(event) => setExperienceLevel(event.target.value)}
          >
            <option value="">-Experience level-</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <label>
          <input
            name="instrument"
            type="text"
            value={instrument}
            placeholder='Instrument'
            onChange={(event) => setInstrument(event.target.value)}
          />
        </label>
        <label className='choose-file'>
          <div className='image-upload-box'>
          <p className='image-upload-text'>Update profile picture</p>
					<img src={uploadimg} alt="upload profile pic" className="image-upload"/>
          </div>
          <input className='no-file'
            name="image"
            type="file"
            onChange={(event) => setUserImage(event.target.files[0])}
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <br/>
				<br/>
        <div className='book-back-box'>
        <button className='book-back-button' type="submit">Update profile</button>
        </div>
      </form>
      <br />
      <br />
    </div>
  );
};

export default EditUserPage;
