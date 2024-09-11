import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Pricing from "./components/Pricing";
import SignIn from "./components/SignIn";
import Tryceptura from "./components/tryceptura";
import Requestcall from "./components/requestcall";
import Message from "./pages/Message";
import Aboutus from "./pages/Aboutus";
import BuyNowButton from "./pages/BuyNowButton"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/message" element={<Message />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/tryceptura" element={<Tryceptura />} />
        <Route path="/requestcall" element={<Requestcall />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/buynowbutton" element={<BuyNowButton />} />
      </Routes>
    </Router>
  );
}

export default App;
