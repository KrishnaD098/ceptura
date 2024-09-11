import React, { useRef, useEffect } from 'react';
import { FaUpload, FaFilePdf, FaArrowRight } from 'react-icons/fa';
import h3 from "../assets/H3.jpg"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PDFReaderSection = () => {
  const containersRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(containersRef.current, 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: containersRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
        }
      }
    );
  }, []);

  const handleHover = (el, scale) => {
    gsap.to(el, {
      scale: scale,
      ease: "power3.out",
      duration: 0.5
    });
  };

  return (
    <div className="pdf-reader-section bg-gray-50 py-16 min-h-screen flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            The only AI-based, end-to-end automated takeoff software
          </p>
          <p className="text-md md:text-lg text-gray-600">
            Ceptura enables your Estimating Team to scale effortlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Container */}
          <div 
            className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center h-[400px] transition-transform duration-300 hover:scale-105"
            ref={el => containersRef.current[0] = el}
            onMouseEnter={() => handleHover(containersRef.current[0], 1.05)}
            onMouseLeave={() => handleHover(containersRef.current[0], 1)}
          >
            <img 
              src={h3} 
              alt="Upload"
              className="w-full h-1/2 object-cover rounded-t-lg"
            />
            <div className="w-full h-[2px] bg-gray-300 my-4"></div>
            <div className="p-6 flex flex-col items-center justify-center h-1/2">
              <FaUpload className="text-3xl text-[#132030] mb-4 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">Upload Your Plan Docs</h2>
              <p className="text-gray-700 text-center">Upload your PDF documents here.</p>
            </div>
          </div>

          {/* Second Container */}
          <div 
            className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center h-[400px] transition-transform duration-300 hover:scale-105"
            ref={el => containersRef.current[1] = el}
            onMouseEnter={() => handleHover(containersRef.current[1], 1.05)}
            onMouseLeave={() => handleHover(containersRef.current[1], 1)}
          >
            <img 
              src={h3} 
              alt="Scope"
              className="w-full h-1/2 object-cover rounded-t-lg"
            />
            <div className="w-full h-[2px] bg-gray-300 my-4"></div>
            <div className="p-6 flex flex-col items-center justify-center h-1/2">
              <FaFilePdf className="text-3xl text-[#132030] mb-4 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">Scope of Work</h2>
              <p className="text-gray-700 text-center">Review the scope of work information here.</p>
            </div>
          </div>

          {/* Third Container */}
          <div 
            className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col items-center h-[400px] transition-transform duration-300 hover:scale-105"
            ref={el => containersRef.current[2] = el}
            onMouseEnter={() => handleHover(containersRef.current[2], 1.05)}
            onMouseLeave={() => handleHover(containersRef.current[2], 1)}
          >
            <img 
              src={h3} 
              alt="Proceed"
              className="w-full h-1/2 object-cover rounded-t-lg"
            />
            <div className="w-full h-[2px] bg-gray-300 my-4"></div>
            <div className="p-6 flex flex-col items-center justify-center h-1/2">
              <FaArrowRight className="text-3xl text-[#132030] mb-4 transition-transform duration-300 hover:scale-110" />
              <h2 className="text-lg font-semibold text-gray-700 text-center mb-2">Hit "Proceed"</h2>
              <p className="text-gray-700 text-center">Click proceed to continue.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFReaderSection;
