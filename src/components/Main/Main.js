import Hero from "../Hero/Hero.js";
import About from "../About/About";
import Projects from "../Projects/Projects";
import ContactForm from "../ContactForm/ContactForm";
import {withStatusOfLoading} from "../../hocs/withStatusOfLoading";

const Main = () => {

    return (
        <main className="main-body">
            {Hero({})}
            {About({})}
            {Projects({})}
            {withStatusOfLoading(ContactForm)({})}
        </main>

        )
}

export default Main;