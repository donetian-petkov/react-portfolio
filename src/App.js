import { Routes, Route } from 'react-router-dom';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar.js";
import {Footer} from "./components/Footer/Footer.js";
import {Toaster} from "react-hot-toast";
import React, {Suspense} from "react";
import {Loading} from "./components/Loading/Loading";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {

    const Main = React.lazy(() => import('./components/Main/Main.js'));
    const About = React.lazy(() => import('./components/About/About.js'));
    const Projects = React.lazy(() => import('./components/Projects/Projects.js'));
    const ContactForm = React.lazy(() => import('./components/ContactForm/ContactForm.js'));

    return (
    <div className="App">
        <div><Toaster/></div>
        <NavBar/>
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<ContactForm/>} />
            </Routes>
        </Suspense>
        <BackToTopButton/>
        <Footer/>
    </div>
  );
}

export default App;
