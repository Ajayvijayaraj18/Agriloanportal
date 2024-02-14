import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'; // Assuming you have a CSS file named Login.css

const Login = () => {
  const [loginRequest, setLoginRequest] = useState({
    emailId: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8083/api/users/login', loginRequest);

      if (response.data === 'Login successful!') {
        // Navigate to the home page upon successful login
        navigate('/');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
      console.error('Invalid credentials:', error.response.data);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleAdminLogin = () => {
    navigate('/adminlogin');
  };

  return (
    <>
    <div id='b'>
      <br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div id="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>Email: </label><br/>
        <input
          type="email"
          name="emailId"
          onChange={handleInputChange}
        /><br/>

        <label>Password: </label><br/>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
        /><br/>

        {error && <p className="error-message">{error}</p>}

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <button type="button" onClick={handleRegister}>
          Register
        </button>

        <button type="button" onClick={handleAdminLogin}>
          Admin Login
        </button>
      </form> </div>
    </div>
    </>
  );
};

export default Login;
