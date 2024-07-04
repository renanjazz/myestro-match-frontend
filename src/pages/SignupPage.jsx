import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import { AuthContext } from '../context/auth.context.jsx';
import uploadimg from '../assets/upload-profile-pic.png';

const SignUpPage = () => {
	const [fullname, setFullname] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [experienceLevel, setExperienceLevel] = useState("");
	const [instrument, setInstrument] = useState('');
	const [userImage, setUserImage] = useState(null);
	const [error, setError] = useState(null);

	const nav = useNavigate();
	const { storeToken, authUser } = useContext(AuthContext);

	async function handleSignUp(e) {
		e.preventDefault();
    setError(null);

    if (!experienceLevel) {
      setError("Please select an experience level.");
      return;
    }

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
			storeToken(data.token);
			authUser();
			nav('/');
		} catch (error) {
			console.error('Error creating user:', error);
			setError(error);
		}
	}

	return (
		<div>
			<h2>Sign up</h2>
			<form
				onSubmit={handleSignUp}
				className="signup-form"
			>
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
						name="password"
						type="password"
						value={password}
						placeholder="Password"
						onChange={(event) => setPassword(event.target.value)}
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
						placeholder="Instrument"
						onChange={(event) => setInstrument(event.target.value)}
					/>
				</label>
				<label className='choose-file'>
					<div className='image-upload-box'>
					<p className='image-upload-text'>Upload profile picture</p>
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
				<button className='book-back-button' type="submit">Submit</button>
				</div>
			</form>
      <br />
      <p className='signup-login-cta'>Already have an account? <a href="/login">Login!</a></p>
	  <br/>
	  <br/>
	  <br/>

		</div>
		
	);
};

export default SignUpPage;
