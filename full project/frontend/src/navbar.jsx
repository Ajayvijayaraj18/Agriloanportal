// Navbar.jsx

import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/">Loan</Link>
          <ul className="sub-dropdown">
            <li><Link to="/check-status">Check Status</Link></li>
            <li><Link to="/apply-loan">Apply Loan</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      
        <li>
          <Link to="/support-center">Support Center</Link>
        </li>
        <li className="dropdown">
          <Link to="/">Profile</Link>
          <ul className="sub-dropdown">
            {/* Add the logout link */}
            <li><Link to="/login">Log Out</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;