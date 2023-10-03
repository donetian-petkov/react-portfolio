import logo from './logo.svg';
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
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
