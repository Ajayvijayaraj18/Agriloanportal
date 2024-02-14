import { useState } from 'react';
import "./AgricultureForm.css";
import axios from 'axios';
const AgricultureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    phoneNumber: '',
    age: 0,
    aadharNumber: '',
    bankStatement: '',
    creditScore: 0,
    agricultureSourceOfIncome: '',
    otherSourceOfIncome: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8083/api/agriculture', {
        
      })
      console.log(response.data)

      if (response.ok) {
        console.log('Agriculture data submitted successfully');
        // You can redirect or handle success in another way here
      } else {
        console.error('Failed to submit Agriculture data');
      }
    } catch (error) {
      console.error('Error during the request', error);
    }
  };

  return (

    <>
    <body>
      <h2> <center>Agriculture Loan Entry </center> </h2>
    <div id='container'>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} />

      <label>Date of Birth:</label>
      <input type="text" name="dob" value={formData.dob} onChange={handleChange} />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} />

      <label>Phone Number:</label>
      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

      <label>Age:</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} />

      <label>Aadhar Number:</label>
      <input type="text" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />

      <label>Bank Statement:</label>
      <input type="text" name="bankStatement" value={formData.bankStatement} onChange={handleChange} />

      <label>Credit Score:</label>
      <input type="number" name="creditScore" value={formData.creditScore} onChange={handleChange} />

      <label>Agriculture Source of Income:</label>
      <input
        type="text"
        name="agricultureSourceOfIncome"
        value={formData.agricultureSourceOfIncome}
        onChange={handleChange}
      />

      <label>Other Source of Income:</label>
      <input
        type="text"
        name="otherSourceOfIncome"
        value={formData.otherSourceOfIncome}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>

    </div>
    </body>
    </>
  );
};

export default AgricultureForm;
