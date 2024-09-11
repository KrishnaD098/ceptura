import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from "../assets/signin.png"; // Replace with actual image
import Navbar from '../components/Navbar3'; // Import your Navbar component

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    gsap.from(socialIconsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: socialIconsRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar />
      
      <div
        className="min-h-screen flex items-center justify-center mt-16" // Adjust mt to account for the fixed navbar height
        style={{
          background: "linear-gradient(to bottom right, #EFF0F0, #ffffff)",
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="md:w-1/2 p-6" ref={imageRef}>
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Block */}
          <div className="md:w-1/2 p-6" ref={textRef}>
            <h1
              className="text-8xl font-bold text-[#132030] mb-6"
              ref={headingRef}
            >
              ABOUT US
            </h1>
            <p className="text-lg text-[#4A515D] leading-relaxed mb-6">
              Our company was founded with the vision to redefine the construction landscape. We began as a small firm focused on providing quality and innovative solutions for every client. Over the years, we've grown into a full-service construction company that prides itself on delivering exceptional results in all facets of the industry.
              <br />
              <br />
              Today, we offer a comprehensive range of services from residential and commercial construction to project management and architectural design. Our commitment to excellence and customer satisfaction drives us to exceed expectations on every project.
            </p>
            <div className="flex mt-6 space-x-4" ref={socialIconsRef}>
              <a href="/" className="text-[#132030] hover:text-blue-500 text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="text-[#132030] hover:text-blue-500 text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="text-[#132030] hover:text-blue-500 text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
