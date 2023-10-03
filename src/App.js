import { Routes, Route } from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar.js";
import {About} from "./components/About/About.js";
import {Projects} from "./components/Projects/Projects.js";
import {Footer} from "./components/Footer/Footer.js";
import {Hero} from "./components/Hero/Hero.js";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Footer />} />
        </Routes>
    </div>
  );
}

export default App;
