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
        <footer className='soc'>
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
       

<div className="container">
   
    <h2><center><marquee>Agriculture Loan portal</marquee></center></h2>
    <p>The Agriculture Loan Portal serves as a dedicated online platform designed to streamline and facilitate the process of obtaining loans for farmers and agricultural businesses. With a user-friendly interface, the portal allows farmers to easily apply for financial assistance to support their farming ventures. The platform provides comprehensive information on various loan options tailored to agricultural needs, including crop cultivation, equipment purchase, and land development. Through the portal, farmers can submit loan applications, track the status of their requests, and access relevant resources to make informed financial decisions. The system ensures transparency and efficiency in the loan approval process, enabling farmers to secure funds promptly for enhancing productivity and sustainable agricultural practices. Additionally, the portal offers educational materials, promoting financial literacy within the farming community and fostering a supportive environment for agricultural development.</p>
</div>

      </div>
    </>
  );
};

export default Homepage;
