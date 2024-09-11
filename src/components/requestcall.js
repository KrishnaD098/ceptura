import React, { useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import { gsap } from 'gsap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link
import 'react-calendar/dist/Calendar.css';

const RequestCall = () => {
  const calendarRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      calendarRef.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2 }
    );
    gsap.fromTo(
      detailsRef.current,
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, delay: 0.5 }
    );
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-[#132030] to-[#4A515D]">
      {/* Navigation Link */}
      <Link to="/" className="absolute top-4 left-4 text-2xl font-bold text-[#EFF0F0] hover:text-[#4A515D] transition duration-300">
        Ceptura
      </Link>
      
      {/* Left Side - Calendar */}
      <div
        ref={calendarRef}
        className="bg-[#4A515D] text-white p-8 rounded-lg shadow-lg flex flex-col items-center mr-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Ceptura Discovery Call</h2>
        <div className="flex items-center justify-between w-full mb-4">
          <button className="text-white p-2 hover:scale-110 transition-transform duration-300">
            <FaChevronLeft size={20} />
          </button>
          <h3 className="text-lg">August 2024</h3>
          <button className="text-white p-2 hover:scale-110 transition-transform duration-300">
            <FaChevronRight size={20} />
          </button>
        </div>
        <Calendar
          className="text-black w-full hover:shadow-lg transition-shadow duration-300"
          tileClassName={({ date, view }) =>
            view === 'month' && date.getDay() === 0 ? 'text-red-600' : ''
          }
          tileContent={({ date, view }) =>
            view === 'month' && date.getDate() === 27 ? (
              <div className="flex justify-center items-center">
                <span className="bg-[#EFF0F0] text-[#4A515D] rounded-full p-2">Call</span>
              </div>
            ) : null
          }
          tileDisabled={({ date }) => date < new Date()} // Disable past dates
        />
      </div>

      {/* Right Side - Details */}
      <div
        ref={detailsRef}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h3 className="text-gray-700 text-lg font-semibold mb-4">Meeting duration</h3>
        <div className="bg-gray-100 p-4 rounded-md text-gray-600 mb-8">
          30 mins
        </div>
        <h3 className="text-gray-700 text-lg font-semibold mb-2">What time works best?</h3>
        <p className="text-gray-500 mb-1">Showing times for <b>27 August 2024</b></p>
        <p className="text-[#4A515D] mb-6">UTC +05:30 New Delhi, Mumbai, Calcutta</p>
        <button className="w-full py-3 mb-4 border border-[#4A515D] rounded-md bg-gradient-to-r from-[#EFF0F0] to-[#4A515D] text-[#4A515D] hover:from-[#4A515D] hover:to-[#EFF0F0] hover:text-white transition-all duration-300">
          10:30 pm
        </button>
        <button className="w-full py-3 mb-4 border border-[#4A515D] rounded-md bg-white text-[#4A515D] hover:bg-[#4A515D] hover:text-white transition-all duration-300">
          11:00 pm
        </button>
        <button className="w-full py-3 border border-[#4A515D] rounded-md bg-white text-[#4A515D] hover:bg-[#4A515D] hover:text-white transition-all duration-300">
          11:30 pm
        </button>
      </div>
    </div>
  );
};

export default RequestCall;
