import React, { useState, useEffect, useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const cardRef = useRef([]);
  const headingRef = useRef(null);

  const handleToggle = (event) => {
    setBillingCycle(event.target.checked ? 'yearly' : 'monthly');
  };

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    cardRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reset",
        },
      });
    });
  }, []);

  return (
    <div className="relative bg-[#EFF0F0] min-h-screen pt-16 py-12 px-4">

      <div className="text-center mb-12" ref={headingRef}>
        <h1 className="text-5xl font-bold text-[#132030]">Our Pricing Plans</h1>
        <p className="text-lg text-[#4A515D] mt-4">Choose the plan that suits you best</p>
      </div>

      <div className="flex flex-col items-center mb-12">
        <span className="text-lg text-[#4A515D] mb-2">Billing Cycle:</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            onChange={handleToggle}
            checked={billingCycle === 'yearly'}
          />
          <div className="block bg-[#4A515D] w-14 h-8 rounded-full">
            <div
              className={`absolute left-1 top-1 bg-[#EFF0F0] w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                billingCycle === 'yearly' ? 'translate-x-6' : ''
              }`}
            ></div>
          </div>
          <span className="ml-4 text-[#132030]">{billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</span>
        </label>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {/* Basic Plan */}
        <div
          className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-80 border border-[#4A515D]"
          ref={(el) => cardRef.current[0] = el}
        >
          <h2 className="text-2xl font-bold text-[#132030]">Basic</h2>
          <p className="text-4xl font-bold mt-4">
            ${billingCycle === 'monthly' ? '99' : '999'}
            <span className="text-base font-medium">/{billingCycle}</span>
          </p>
          <ul className="mt-6">
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 1
            </li>
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 2
            </li>
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 3
            </li>
          </ul>
          <Link to="/buynowbutton">
            <button className="mt-6 w-full bg-[#132030] text-white py-3 rounded-full hover:bg-blue-700">
              Buy Now
            </button>
          </Link>
        </div>

        {/* Pro Plan */}
        <div
          className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-80 border border-[#4A515D]"
          ref={(el) => cardRef.current[1] = el}
        >
          <h2 className="text-2xl font-bold text-[#132030]">Pro</h2>
          <p className="text-4xl font-bold mt-4">
            ${billingCycle === 'monthly' ? '129' : '1299'}
            <span className="text-base font-medium">/{billingCycle}</span>
          </p>
          <ul className="mt-6">
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 1
            </li>
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 2
            </li>
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 3
            </li>
          </ul>
          <Link to="/buynowbutton">
            <button className="mt-6 w-full bg-[#132030] text-white py-3 rounded-full hover:bg-blue-700">
              Buy Now
            </button>
          </Link>
        </div>

        {/* Corp Plan */}
        <div
          className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-80 border border-[#4A515D]"
          ref={(el) => cardRef.current[2] = el}
        >
          <h2 className="text-2xl font-bold text-[#132030]">Corp</h2>
          <p className="text-4xl font-bold mt-4">
            ${billingCycle === 'monthly' ? '159' : '1599'}
            <span className="text-base font-medium">/{billingCycle}</span>
          </p>
          <ul className="mt-6">
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 1
            </li>
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 2
            </li>
            <li className="flex items-center text-[#4A515D] mb-2">
              <FaCheck className="text-[#132030] mr-2" />
              Feature 3
            </li>
          </ul>
          <Link to="/buynowbutton">
            <button className="mt-6 w-full bg-[#132030] text-white py-3 rounded-full hover:bg-blue-700">
              Buy Now
            </button>
          </Link>        
        </div>
      </div>
    </div>
  );
};

export default Pricing;
