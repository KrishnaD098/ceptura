import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from "../components/Navbar2"

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/message",
        formData
      );
      if (response.data.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const contactRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#132030]  to-[#4A515D]"
      ref={contactRef}
    >
      <Navbar/>
      <div className="relative flex flex-col lg:flex-row w-full max-w-5xl gap-20 p-6 lg:p-12 ">
        {/* Left Side (Form Section) */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-100 rounded-lg p-3 border border-gray-300 text-lg"
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1 flex flex-col">
                <label className="text-white mb-2 text-lg">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 rounded-lg p-3 border border-gray-300 text-lg"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <label className="text-white mb-2 text-lg">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 rounded-lg p-3 border border-gray-300 text-lg"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-white mb-2 text-lg">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-100 rounded-lg p-3 border border-gray-300 h-32 text-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-lg p-3 text-lg hover:bg-purple-700 transition-transform duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side (Contact Information) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center mt-10 lg:mt-0">
          <h1 className="text-6xl font-extrabold mb-8">
            <span className="text-white">Contact </span>
            <span style={{ color: "#01cabd" }}>US</span>
          </h1>
          <h2 className="text-2xl text-white font-semibold mb-8">
            For questions, technical assistance, or collaboration opportunities,
            reach out via the contact information provided.
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center text-white font-bold mb-2">
              <svg
                className="w-6 h-6 text-white mr-2"
                viewBox="0 0 122.88 78.607"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
                />
              </svg>
              <span>Email: hello@reallygreatsite.com</span>
            </div>
            <div className="flex items-center text-white font-bold mb-2">
              <svg
                className="w-6 h-6 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 501.01 511.5"
              >
                <path
                  fill-rule="nonzero"
                  d="M145.23 241.93c31.31 55.96 68.11 95.64 125.54 125.55 4.98-4.48 7.64-8.17 11.76-13.51 16.29-21.45 36.58-47.2 69.81-31.68 21.68 10.97 64.29 34.03 82.31 47.39 6.86 4.82 11.82 10.9 15.16 17.81 7.09 14.71 6.17 31.58 1.67 46.85-2.32 7.86-5.7 15.65-9.71 22.71-15.05 26.44-40.04 40.23-68.87 47.72-35.05 9.07-66.72 9.32-101.56-1.42-26.29-8.13-50.72-21.27-74.05-35.67l-3.01-1.86c-11.32-7.05-23.48-14.63-35.93-23.89l-.09-.08c-23.99-18.06-48.14-40.28-70.04-65.14-20.28-23.02-38.76-48.46-53.51-75.13-13.52-24.45-23.88-50.13-29.65-76.13-8.21-37.03-7.6-79.66 10.62-113.82 21.33-39.98 60.04-56.32 103.38-52.5l1.07.13c7.49.94 14.3 5.51 17.99 12.11l49.31 83.35c4.82 6.52 7.62 13.23 8.56 20.12 3.59 26.47-18.11 42.75-36.68 56.36-6.33 4.6-13.4 9.73-14.08 10.49-5.2 5.4-7.49 12.74-5.66 20.21z"
                />
              </svg>
              <span>Phone: (123) 456-7890</span>
            </div>
            <div className="flex items-center text-white font-bold mb-2">
              <svg
                className="w-6 h-6 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c-2.37 0-4.73.21-7.08.62-129.9 21.26-232.92 127.09-258.74 256.38-1.25 7.6 3.76 14.57 11.34 14.57h45.61c5.41 0 10.18-3.79 11.28-8.99 7.7-30.51 26.71-77.19 65.41-137.49 19.95-30.2 43.5-56.77 71.39-78.76 21.32-16.2 44.29-25.53 69.79-25.53 0 0 9.29-.25 11.92-.25 4.87 0 9.62.87 14.2 2.6 7.47 2.7 14.25 6.86 20.21 12.15 10.28 8.67 21.49 19.49 31.32 31.36 15.37 17.55 29.06 37.44 40.56 58.82 17.86 34.7 27.35 70.62 27.35 106.63 0 21.94-7.43 46.95-17.58 69.73-16.51 37.4-39.26 72.42-66.82 101.51-27.22 28.82-58.04 50.87-90.59 64.86-26.37 11.67-56.32 14.87-84.9 9.24-11.73-2.41-23.62-6.56-35.55-12.24-6.02-3.08-11.76-7.25-17.42-11.69-5.23-4.05-8.7-9.41-11.08-15.06-1.09-3.55-1.67-7.31-1.67-11.09v-54.08c0-7.58-6.16-13.74-13.74-13.74-7.59 0-13.74 6.16-13.74 13.74v54.08c0 7.29.6 14.6 1.75 21.73 3.41 14.67 10.91 27.56 20.45 38.34 8.65 9.53 18.77 17.83 29.64 24.49 14.35 8.76 29.89 14.56 45.54 17.73 13.72 2.68 27.52 2.15 41.65-.84 22.16-4.66 43.67-14.6 63.93-28.62 14.67-10.1 28.58-22.39 40.52-36.8 29.46-33.45 48.74-69.82 59.58-107.87 8.67-31.2 13.43-63.84 13.43-96.72 0-31.29-4.33-61.65-12.74-90.91-10.7-42.42-27.09-82.88-47.43-120.8-9.73-16.51-20.7-31.98-32.98-47.02-9.95-11.52-20.81-22.46-32.98-32.9-13.85-12.62-29.03-24.68-45.39-35.77-3.31-2.47-6.73-4.73-10.34-6.84-1.21-.68-2.38-1.38-3.6-2.02-3.89-1.94-7.7-4.09-11.55-6.34-"
                />
              </svg>
              <span>Address: 123 Main St, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
