import React from 'react';
import Navbar from '../components/Navbar3';

const BuyNowButtons = () => {
  const handleStripeClick = () => {
    window.location.href = 'https://buy.stripe.com/test_checkout_link'; // Replace with your Stripe Checkout URL
  };

  const handlePayPalClick = () => {
    window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XXXXXX'; // Replace with your PayPal button link
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EFF0F0] p-4">
      <Navbar /> {/* Include your Navbar component */}

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-3xl font-bold text-[#132030] mb-6">Choose Your Payment Method</h2>
        <div className="flex flex-col space-y-4">
          <button 
            onClick={handleStripeClick} 
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Buy Now with Stripe
          </button>
          <button 
            onClick={handlePayPalClick} 
            className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Buy Now with PayPal
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyNowButtons;
