import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-full mx-auto px-10 lg:px-20 xl:px-40 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left Side: Company Information */}
        <div className="flex flex-col space-y-6">
          <img src="/path-to-logo/logo.png" alt="Company Logo" className="w-40 mb-6" />
          <div className="text-sm leading-relaxed">
            <p>123 Street Name, City, Country</p>
            <p>Chandigarh, India</p>
            <p>(+123) 456-7890</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white hover:text-gray-400" size={28} />
            </a>
            {/* <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white hover:text-gray-400" size={28} />
            </a> */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white hover:text-gray-400" size={28} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white hover:text-gray-400" size={28} />
            </a>
          </div>
        </div>

        {/* Center: Footer Links */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold mb-4 text-lg">Products</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/" className="hover:text-gray-400">Ceptura Capture</a></li>
              <li><a href="/" className="hover:text-gray-400">Ceptura BIM+</a></li>
              <li><a href="/" className="hover:text-gray-400">Ceptura Track</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Solutions</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/" className="hover:text-gray-400">Why Ceptura</a></li>
              <li><a href="/" className="hover:text-gray-400">For General Contractors</a></li>
              <li><a href="/" className="hover:text-gray-400">For Owners</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side: Footer Links */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="font-bold mb-4 text-lg">Company</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/" className="hover:text-gray-400">About Us</a></li>
              <li><a href="/" className="hover:text-gray-400">Careers</a></li>
              <li><a href="/" className="hover:text-gray-400">Partners</a></li>
              <li><a href="/" className="hover:text-gray-400">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-lg">Get Started</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="/" className="hover:text-gray-400">Get a Demo</a></li>
              <li><a href="/" className="hover:text-gray-400">Try Ceptura</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-16 pt-6 text-center text-base">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
