import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import { AuthContext } from '../context/auth.context.jsx';

const SignUpPage = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [instrument, setInstrument] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [error, setError] = useState(null);

  const nav = useNavigate();
  const {storeToken, authUser} = useContext(AuthContext)

  async function handleSignUp(e) {
    e.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone_number', phoneNumber);
    formData.append('experience_level', experienceLevel);
    formData.append('instrument', instrument);
    formData.append('imageUrl', userImage);

    try {
      const { data } = await axios.post(`${API_URL}/auth/signup`, formData);
      console.log('User created:', data);
      storeToken(token.authToken)
      authUser()
      nav("/")
    } catch (error) {
      console.error('Error creating user:', error);
      setError('An error occurred while creating the user. Please try again later.');
    }
  }

  return (
    <div>
      <h1>Sign up!</h1>
      <form onSubmit={handleSignUp} className="sign-up-form">
        <label>Email:
          <input
            type="email"
            name="email"
            value={email}
            placeholder="gollum.sucks@lotr.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>Username:
          <input
            name="username"
            type="text"
            value={username}
            placeholder="BetterThanGollum"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>Fullname:
          <input
            name="fullname"
            type="text"
            value={fullname}
            placeholder="Smeagol"
            onChange={(event) => setFullname(event.target.value)}
          />
        </label>
        <label>Password:
          <input
            name="password"
            type="password"
            value={password}
            placeholder="*******"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>Phone Number:
          <input
            name="phone_number"
            type="text"
            value={phoneNumber}
            placeholder="123-456-7890"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </label>
        <label>Experience Level:
          <select
            name="experience_level"
            value={experienceLevel}
            onChange={(event) => setExperienceLevel(event.target.value)}
          >
            <option value="">Select</option>
            <option value="One">One</option>
            <option value="Two">Two</option>
            <option value="Three">Three</option>
          </select>
        </label>
        <label>Instrument:
          <input
            name="instrument"
            type="text"
            value={instrument}
            placeholder="Instrument"
            onChange={(event) => setInstrument(event.target.value)}
          />
        </label>
        <label>Profile picture:
          <input
            name="image"
            type="file"
            onChange={(event) => setUserImage(event.target.files[0])}
          />
        </label>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUpPage;