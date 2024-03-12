
import Header from '../Component/Header'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Services from './Component/Services'
import Tracking from './Component/Tracking'
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS (optional)
      duration: 3000
    });
  }, []); // Ensure this useEffect runs only once after component mount
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/service" element={<Service/>}/>
        <Route exact path="/tracking" element={<Tracking/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  )
}

export default App