import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Home = () => {
  return (
    <div>
      <header>
        <h1>Agriculture Loan Portal</h1>
      </header>

      <section>
        <h2>Welcome to our Agriculture Loan Portal</h2>
        <p>
          Explore our services and find the right loan options for your
          agricultural needs.
        </p>
      </section>

      <section>
        <h2>Loan Options</h2>
        <ul>
          <li>
            <Link to="/loan-types">View Loan Types</Link>
          </li>
          <li>
            <Link to="/eligibility">Check Eligibility</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Apply for a Loan</h2>
        <p>
          Ready to apply for a loan? Fill out our application form and get
          started.
        </p>
        <Link to="/apply-now" className="btn">
          Apply Now
        </Link>
      </section>

      <footer>
        <p>&copy; 2024 Agriculture Loan Portal</p>
      </footer>
    </div>
  );
};

export default Home;
