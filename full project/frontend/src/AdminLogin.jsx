
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
      // Validate input
      if (!username || !password) {
        setMessage('Please enter both username and password');
        return;
      }
  
      const response = await fetch('http://localhost:8083/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        const data = await response.text(); // Use response.text() for non-JSON responses
        setMessage(data);
  
        // Check for "Invalid credentials" before navigating
        if (data !== 'Invalid credentials') {
          navigate('/adminhome');
        }
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('Error during login');
    }
  };
  
  
  return (
    <div className='alogin-container'>
      <h2>Admin Login</h2>
      <div>
        <label htmlFor="username"><cd>Username:</cd></label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password"><cd>Password:</cd></label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};

export default AdminLogin;