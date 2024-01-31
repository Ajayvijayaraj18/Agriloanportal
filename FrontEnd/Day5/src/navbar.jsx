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
          <Link to="/">Contact us</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;