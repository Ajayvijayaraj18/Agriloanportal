import  { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const AgricultureList = () => {
  const [agricultures, setAgricultures] = useState([]);

  useEffect(() => {
    // Fetch agriculture data from the backend
    axios.get('http://localhost:8080/api/agriculture/all')
      .then(response => {
        setAgricultures(response.data);
      })
      .catch(error => {
        console.error('Error fetching agriculture data:', error);
      });
  }, []);

  return (
    <>
    <AdminNavbar/>
    <div>
      <h2>All Agriculture Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Aadhar Number</th>
            <th>Bank Statement</th>
            <th>Credit Score</th>
            <th>Agriculture Source of Income</th>
            <th>Other Source of Income</th>
          </tr>
        </thead>
        <tbody>
          {agricultures.map(agriculture => (
            <tr key={agriculture.id}>
              <td>{agriculture.id}</td>
              <td>{agriculture.name}</td>
              <td>{agriculture.dob}</td>
              <td>{agriculture.email}</td>
              <td>{agriculture.phoneNumber}</td>
              <td>{agriculture.age}</td>
              <td>{agriculture.aadharNumber}</td>
              <td>{agriculture.bankStatement}</td>
              <td>{agriculture.creditScore}</td>
              <td>{agriculture.agricultureSourceOfIncome}</td>
              <td>{agriculture.otherSourceOfIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AgricultureList;