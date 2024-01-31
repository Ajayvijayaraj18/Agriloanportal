import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:8080/api/users/register', user);
      // Automatically navigate to the login page upon successful registration
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error.response.data);
    }
  };

  const handleLogin = () => {
    // Navigate to the admin login page
    navigate('/login');
  };

  return (
    <>
    <br/>
    <div className='abg'>
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form">
        <label htmlFor="firstName">First Name: </label>
        <input type="text" id="firstName" name="firstName" onChange={handleInputChange} />
        <br/>

        <label htmlFor="lastName">Last Name: </label>
        <input type="text" id="lastName" name="lastName" onChange={handleInputChange} />
        <br/>

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="emailId" onChange={handleInputChange} />
        <br/>

        <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone" name="phone" onChange={handleInputChange} />
        <br/>

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" onChange={handleInputChange} />
        <br/>

        <button type="button" onClick={handleRegister}>
          Register
        </button>

        {/* Button to navigate to admin login */}
        <button type="button" onClick={handleLogin}>
          Login
        </button>

        

        
      </form>
    </div>
    </div>
    </>
  );
};

export default Register;
