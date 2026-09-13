import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function Home() {
  return (
    <div className="text-center py-24 px-4">
      <h1 className="text-4xl lg:text-5xl font-bold text-green-900" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        Welcome to Meg's Therapy
      </h1>
      <p className="text-green-800/80 mt-4 max-w-xl mx-auto">
        A calm, supportive space for individuals, couples, families, and teens.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F5F1E8] text-green-900 overflow-hidden">
        <Navbar />
        <div className="pt-14 sm:pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;