import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import BookNow from "./pages/BookNow";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import "./App.css";

import TextUsButton from "./components/TextUsButton";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <TextUsButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
