import { Routes, Route } from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar.js";
import {About} from "./components/About/About.js";
import {Projects} from "./components/Projects/Projects.js";
import {Footer} from "./components/Footer/Footer.js";
import {Hero} from "./components/Hero/Hero.js";
import {Main} from "./components/Main/Main";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Footer />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
