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
  const { storeToken, authUser } = useContext(AuthContext);

  async function handleLogin(e) {
    e.preventDefault();
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
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={username}
            placeholder='your username'
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            placeholder='your password'
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit">Login!</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <br />
      <h3>Not a member yet? <a href="/signup">Sign up now!</a></h3>
    </div>
  );
};

export default LoginPage;
