import './Homepage.css';
import Navbar from "./navbar";
import ImageDisplay from './ImageDisplay';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className='homediv1'>
        <h1>Agriculture Loan Portal</h1>
        <ImageDisplay />
        <footer>
          <p>&copy; 2024 Agriculture Loan Portal</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;
