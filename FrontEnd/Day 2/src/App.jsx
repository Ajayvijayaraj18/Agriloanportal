import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import Register from './register';
import Login from './login';
import AdminLogin from './AdminLogin';
import AgricultureForm from './AgricultureForm';
import ContactUs from './Contact us';
import AdminHome from './AdminHome';
import AgricultureList from './AgricultureList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/apply-loan" element={<AgricultureForm/>} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/alist" element={<AgricultureList />} />
      </Routes>
    </Router>
  );
};

export default App;