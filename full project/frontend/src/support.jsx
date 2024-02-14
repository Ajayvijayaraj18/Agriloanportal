import  { useState } from 'react';
import axios from 'axios';
import './support.css';

function Support() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    phone: '',
    category: '',
    description: '',
    priorityLevel: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8083/support', formData);
      setSubmitMessage('Support request submitted successfully!');
      setErrorMessage('');
      console.log('Support request submitted successfully:', response.data);
      // You can add additional logic or UI updates here
    } catch (error) {
      setSubmitMessage('');
      setErrorMessage('Error submitting support request. Please try again.');
      console.error('Error submitting support request:', error);
      // Handle errors and update UI accordingly
    }
  };

  return (
    <div className="support-container">
      <h1>Support Center</h1>
      <form onSubmit={handleSubmit}>
        <label>
        <bg> First Name:</bg>
          <input type="text" name="firstName" color="black" value={formData.firstName} onChange={handleChange} required />
        </label>
        <br />

        <label>
        <bg> Last Name:</bg>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </label>
        <br />

        <label>
         <bg> Email:</bg>
          <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required />
        </label>
        <br />

        <label>
        <bg>Phone:</bg>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <br />

        <label>
        <bg> Category:</bg>
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Loan Issue">Loan Issue</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </label>
        <br />

        <label>
        <bg> Description:</bg>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label> 
        <br />

        <label>
        <bg> Priority Level:</bg>
          <select name="priorityLevel" value={formData.priorityLevel} onChange={handleChange} required>
            <option value="">Select Priority Level</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit</button>

        {submitMessage && <p style={{ color: 'black', marginTop: '10px' }}>{submitMessage}</p>}
        {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Support;