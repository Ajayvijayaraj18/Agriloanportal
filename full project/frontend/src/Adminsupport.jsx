import  { useState, useEffect } from 'react';
import axios from 'axios';

function Adminsupport() {
  const [supportData, setSupportData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupportData = async () => {
      try {
        const response = await axios.get('http://localhost:8083/support');
        setSupportData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching support data:', error);
        setLoading(false);
      }
    };

    fetchSupportData();
  }, []);

  return (
    <div className="Admin">
      <h1>Admin Dashboard - View All Support Requests</h1>
      {loading ? (
        <p>Loading support data...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Support ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Category</th>
              <th>Description</th>
              <th>Priority Level</th>
            </tr>
          </thead>
          <tbody>
            {supportData.map((support) => (
              <tr key={support.supportId}>
                <td>{support.supportId}</td>
                <td>{support.firstName}</td>
                <td>{support.lastName}</td>
                <td>{support.emailId}</td>
                <td>{support.phone}</td>
                <td>{support.category}</td>
                <td>{support.description}</td>
                <td>{support.priorityLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Adminsupport;