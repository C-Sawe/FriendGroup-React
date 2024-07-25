import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Pricing from './pages/Pricing';
import Tutors from './pages/tutors';
import Header from './components/Header';
import Footer from './components/Footer';
import PaymentMethod from './pages/PaymentMethod';
import Tutorsdash from './Dashcomponents/tutorsdash';
import SignInSignUp from './Signincomponents/SigninSignup';
import Studentdash from './Dashcomponents/studentdash';
import Dashboard from './Dashcomponents/Dashboard';
import Auth0ProviderWithHistory from './Authentication/auth0-provider-with-history';
import Coursesmain from './Coursecomponents/Coursemain';
import Coursecontent from './Coursecomponents/Coursecontent';


const App = () => {
  return (
    <div>
    
    <BrowserRouter>
    <Auth0ProviderWithHistory>
    <Header />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/tutorsdash" element={<Tutorsdash/>} />
        <Route path="/SigninSignup" element={<SignInSignUp/>} />
        <Route path="/studentdash" element={<Studentdash/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/PaymentMethod" element={<PaymentMethod/>} />
        <Route path="/Coursemain" element={<Coursesmain/>} />
        <Route path="/Coursecontent" element={<Coursecontent/>} />
      
      </Routes>
      <Footer/>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
    
    </div>

  );
};

export default App;
