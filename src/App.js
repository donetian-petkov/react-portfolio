import { Routes, Route } from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar.js";
import {About} from "./components/About/About.js";
import {Projects} from "./components/Projects/Projects.js";
import {Footer} from "./components/Footer/Footer.js";
import {Main} from "./components/Main/Main";
import {ContactForm} from "./components/ContactForm/ContactForm";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="App">
        <div><Toaster/></div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactForm/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
