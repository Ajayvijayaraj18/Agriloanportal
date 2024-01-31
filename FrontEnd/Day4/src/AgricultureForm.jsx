
import  { useState, useEffect } from 'react';
import axios from 'axios';
import './AgricultureForm.css';


const AgricultureForm = () => {
  const [agricultureList, setAgricultureList] = useState([]);
  const [newAgricultureEntry, setNewAgricultureEntry] = useState({
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

  const fetchAgricultureEntries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/agriculture');
      setAgricultureList(response.data);
    } catch (error) {
      console.error('Error fetching agriculture entries:', error);
    }
  };

  const saveNewAgricultureEntry = async () => {
    try {
      await axios.post('http://localhost:8080/api/agriculture', newAgricultureEntry);
      setNewAgricultureEntry({
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
      fetchAgricultureEntries(); // Refresh the list after saving
    } catch (error) {
      console.error('Error saving new agriculture entry:', error);
    }
  };

  useEffect(() => {
    fetchAgricultureEntries();
  }, []); // Fetch agriculture entries on component mount

  return (
    <div id='container'>
      <h1>Agriculture Entries</h1>
      <ul>
        {agricultureList.map((entry) => (
          <li key={entry.id}>{entry.name}</li>
        ))}
      </ul>

      <h2>Add New Agriculture Entry</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={newAgricultureEntry.name}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, name: e.target.value })}
        />

        <label>Date of Birth:</label>
        <input
          type="text"
          value={newAgricultureEntry.dob}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, dob: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="text"
          value={newAgricultureEntry.email}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, email: e.target.value })}
        />

        <label>Phone Number:</label>
        <input
          type="text"
          value={newAgricultureEntry.phoneNumber}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, phoneNumber: e.target.value })}
        />

        <label>Age:</label>
        <input
          type="number"
          value={newAgricultureEntry.age}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, age: e.target.value })}
        />

        <label>Aadhar Number:</label>
        <input
          type="text"
          value={newAgricultureEntry.aadharNumber}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, aadharNumber: e.target.value })}
        />

        <label>Bank Statement:</label>
        <input
          type="text"
          value={newAgricultureEntry.bankStatement}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, bankStatement: e.target.value })}
        />

        <label>Credit Score:</label>
        <input
          type="number"
          value={newAgricultureEntry.creditScore}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, creditScore: e.target.value })}
        />

        <label>Agriculture Source of Income:</label>
        <input
          type="text"
          value={newAgricultureEntry.agricultureSourceOfIncome}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, agricultureSourceOfIncome: e.target.value })}
        />

        <label>Other Source of Income:</label>
        <input
          type="text"
          value={newAgricultureEntry.otherSourceOfIncome}
          onChange={(e) => setNewAgricultureEntry({ ...newAgricultureEntry, otherSourceOfIncome: e.target.value })}
        />

        <button type="button" onClick={saveNewAgricultureEntry}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AgricultureForm;