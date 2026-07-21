import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import BookNow from "./pages/BookNow";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import BookingConfirmation from "./pages/BookingConfirmation";
import "./App.css";

import TextUsButton from "./components/TextUsButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq/" element={<FAQ />} />
            <Route path="/book-now/" element={<BookNow />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/contact/" element={<Contact />} />
            <Route path="/booking-confirmation/" element={<BookingConfirmation />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/confirmation/" element={<BookingConfirmation />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
          </Routes>
        </main>
        <TextUsButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
