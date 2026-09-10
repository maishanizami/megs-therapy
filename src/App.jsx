import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Book from "./components/Book";
import Contact from "./components/Contact";






function App() {

  return (
  <div className="min-h-screen bg-[#F5F1E8] text-green-900 overflow-hidden">
  <Navbar />
  <div className="pt-14 sm:pt-16 md:pt-20">
  <Book />
  <Services />
  <Contact />
  <About />

</div>
  </div>

  );

}

export default App;
