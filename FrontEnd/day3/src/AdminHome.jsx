import  { useState, useEffect } from 'react';
import "./AdminHome.css";
import AdminNavbar from './AdminNavbar';

function AdminHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:8080/api/users/all')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <AdminNavbar/>
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Phone</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.emailId}</td>
              <td>{user.phone}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default AdminHome;