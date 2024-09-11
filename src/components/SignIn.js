import React, { useState } from 'react';
import img from "../assets/signin.png";
import { Link } from 'react-router-dom'; // Import Link for navigation

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="relative bg-white">
      {/* "Ceptura" Link */}
      <Link to="/" className="absolute top-2 left-2 right-2 text-2xl font-bold text-[#132030] hover:text-[#4A515D] transition duration-300">
        Ceptura
      </Link>


      <div className="flex justify-center items-center h-screen bg-white">
        <div className="flex w-full max-w-6xl bg-white overflow-hidden">
          {/* Left Side - Auth Form */}
          <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-left mb-8 text-gray-800">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </h2>
            <form>
              <div className="mb-6">
                <input
                  className="appearance-none bg-transparent border border-gray-300 w-full text-gray-800 py-2 px-4 rounded-lg leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  style={{ display: isSignUp ? 'block' : 'none' }}
                />
              </div>

              <div className="mb-6">
                <input
                  className="appearance-none bg-transparent border border-gray-300 w-full text-gray-800 py-2 px-4 rounded-lg leading-tight focus:outline-none"
                  type="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                />
              </div>

              <div className="mb-6">
                <input
                  className="appearance-none bg-transparent border border-gray-300 w-full text-gray-800 py-2 px-4 rounded-lg leading-tight focus:outline-none"
                  type="password"
                  placeholder="Password"
                  aria-label="Password"
                />
              </div>

              <div className="mb-6" style={{ display: isSignUp ? 'block' : 'none' }}>
                <input
                  className="appearance-none bg-transparent border border-gray-300 w-full text-gray-800 py-2 px-4 rounded-lg leading-tight focus:outline-none"
                  type="password"
                  placeholder="Repeat your password"
                  aria-label="Repeat your password"
                />
              </div>

              <div className="flex items-center mb-6" style={{ display: isSignUp ? 'block' : 'none' }}>
                <input type="checkbox" className="mr-2 leading-tight" />
                <span className="text-gray-600">I agree to all statements in <a href="/" className="text-blue-600">Terms of service</a></span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                {isSignUp ? 'REGISTER' : 'SIGN IN'}
              </button>
            </form>

            <div className="mt-6">
              <button
                onClick={toggleAuthMode}
                className="text-blue-600 focus:outline-none"
              >
                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:flex md:w-1/2 items-center justify-center">
            <img src={img} alt="Auth" className="max-w-full max-h-full object-contain" style={{ marginTop: '50px', marginRight: '-50px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
