import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Book from "./components/Book";
import Contact from "./components/Contact";






function App() {

  return (
  <div className="min-h-screen bg-green-200 text-white overflow-hidden">
  <Navbar />
  <Book />
  <Services />
  <Contact />
  <About />


  </div>

  );

}

export default App;
