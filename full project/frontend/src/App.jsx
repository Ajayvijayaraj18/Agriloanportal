import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import Register from './register';
import Login from './login';
import AdminLogin from './AdminLogin';
import AgricultureForm from './AgricultureForm';
import ContactUs from './Contactus';
import AdminHome from './AdminHome';
import AgricultureList from './AgricultureList';
import Support from './support';
import Adminsupport from './Adminsupport';

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
        <Route path="/support-center" element={<Support />} />
        <Route path="/adminsupport" element={<Adminsupport />} />

      </Routes>
    </Router>
  );
};

export default App;