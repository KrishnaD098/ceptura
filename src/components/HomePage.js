import React from 'react';
import { Link } from 'react-router-dom';
import MainVid from "../assets/home_bg.mp4"; // Ensure this path is correct

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src={MainVid} type="video/mp4" />
      </video>

      {/* Content */}
      <header className="relative flex flex-col items-start justify-center h-full px-10 pt-24">
        <div className="p-10">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg font-sans">Your jobsite</h1>
          <h1 className="text-6xl font-bold text-white drop-shadow-lg font-sans">fully captured</h1>
          <p className="text-2xl mt-4 text-white drop-shadow-lg font-sans">Reality capture and AI-powered analytics</p>
          {/* <p className="text-2xl mt-1 text-white drop-shadow-lg font-sans">for builders—from preconstruction to operations.</p> */}

          <div className="mt-8 space-x-4">
            <Link to="/pricing" className="bg-[#132030] text-white px-4 py-2 rounded text-lg font-sans">See pricing</Link>
            <Link to="/tryceptura" className="bg-[#132030] text-white px-4 py-2 rounded text-lg font-sans">Try CEPTURA</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
