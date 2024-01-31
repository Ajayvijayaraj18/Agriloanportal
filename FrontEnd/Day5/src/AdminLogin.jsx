// AdminLogin.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.text(); // Use response.text() for non-JSON responses
        setMessage(data);
        navigate('/adminhome');
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error during login');
    }
  };

  return (
    <div className='abc'>
    <div className='alogin-container'>
      <h2>Admin Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div></div>
  );
};

export default AdminLogin;
