import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config.js';
import { AuthContext } from '../context/auth.context.jsx';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const nav = useNavigate();
  const { storeToken, authUser, currUser } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
    if(currUser){
      nav("/")
    }
    const userInfo = { username, password };
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, userInfo);
      await storeToken(data.token);
      await authUser();  
      nav('/');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to login. Please check your credentials.');
    }
  }

  return (
    <div>
      <h2>Welcome back!</h2>
      <form className='form-body' onSubmit={handleLogin}>
        <label>
          Username: 
          <input
            name="username"
            type="text"
            value={username}
            placeholder=' saltedPork'
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password: 
          <input
            name="password"
            type="password"
            value={password}
            placeholder=' ********'
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <br />

        <button className="teacher-page-button" type="submit">Login!</button>
      </form>
      {error && <p className='error-message' >{error}</p>}
      <br />
      <br />
      <h3 className='signup-login-cta'>Not a member yet? <a href="/signup">Sign up now!</a></h3>
    </div>
  );
};

export default LoginPage;
