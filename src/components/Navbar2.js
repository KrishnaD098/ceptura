import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar2 = () => {
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
    <nav ref={navRef} className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 z-50">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-white tracking-wider hover:text-[#4A515D] transition duration-300">
          CEPTURA
        </Link>
      </div>
      <div className="space-x-6 flex items-center">
        <Link to="/signin" className="bg-[#132030] text-white px-5 py-2 rounded-md hover:bg-[#4A515D] transition duration-300 shadow-lg transform hover:scale-105">Sign In</Link>
      </div>
    </nav>
  );
};

export default Navbar2;
