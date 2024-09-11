import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: navRef.current,
        start: "top top",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-[#EFF0F0] shadow-lg z-50 border-b border-[#4A515D]">
      <div className="flex items-center">
        <div className="text-xl font-bold text-[#132030] tracking-wider">CEPTURA</div>
      </div>
      <div className="space-x-6 flex items-center">
        <Link to="/" className="text-[#4A515D] hover:text-[#132030] transition duration-300 transform hover:scale-105">Why CEPTURA</Link>
        <Link to="/message" className="text-[#4A515D] hover:text-[#132030] transition duration-300 transform hover:scale-105">Contact Us</Link>
        <Link to="/pricing" className="text-[#4A515D] hover:text-[#132030] transition duration-300 transform hover:scale-105">Pricing</Link>
        <Link to="/Aboutus" className="text-[#4A515D] hover:text-[#132030] transition duration-300 transform hover:scale-105">About Us</Link>
        <Link to="/signin" className="bg-[#132030] text-white px-5 py-2 rounded-md hover:bg-[#4A515D] transition duration-300 shadow-lg transform hover:scale-105">Sign In</Link>
        <Link to="/requestcall" className="bg-[#132030] text-white px-5 py-2 rounded-md hover:bg-[#4A515D] transition duration-300 shadow-lg transform hover:scale-105">Request a Call</Link>
      </div>
    </nav>
  );
};

export default Navbar;
