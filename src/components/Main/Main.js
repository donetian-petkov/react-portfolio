import {Hero} from "../Hero/Hero.js";
import {About} from "../About/About";
import {Projects} from "../Projects/Projects";

export const Main = () => {

    return (
        <main className="main-body">
            <Hero/>
            <About/>
            <Projects/>
        </main>

        )
}