
import './Navbar.css';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/adminhome">Home</Link>
        </li>
        <li>
          <Link to="/alist">Loan</Link>
        </li>
        <li>
          <Link to="/adminsupport">support-center</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default AdminNavbar;