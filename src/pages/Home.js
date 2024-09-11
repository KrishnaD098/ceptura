import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import ServicesPage from "../components/ServicesPage"
import PDFReaderSection from '../components/PDFReaderSection';
import Price from "../components/Price"
import ContactUs from "../pages/ContactUs";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ServicesPage/>
      <PDFReaderSection/>
      <Price />
      <ContactUs/>
    </div>
  );
};

export default Home;
