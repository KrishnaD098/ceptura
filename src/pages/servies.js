import React, { useState } from 'react';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phoneNumber: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/contact', formData);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
