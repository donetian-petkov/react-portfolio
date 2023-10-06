import Hero from "../Hero/Hero.js";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ContactForm from "../ContactForm/ContactForm";

const Main = () => {

    return (
        <main className="main-body">
            <Hero/>
            <About/>
            <Projects/>
            <ContactForm/>
        </main>

        )
}

export default Main;