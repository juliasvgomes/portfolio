import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";
import { Courses } from "./components/Courses";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Página inicial */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-[#171023]">
              <Hero />
              <Projects />
              <About/>
              <Contact />
              <Footer />
            </div>
          }
        />

        {/* Página About separada */}
        <Route
          path="/about"
          element={
            <div className="min-h-screen bg-[#171023]">
              <Skills/>
              <Courses/>
              <Experience/>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
