import {ProjectCard} from "./ProjectCard/ProjectCard.js";
import styles from './Projects.module.css'
import {useEffect, useState} from "react";
import Slider from "../Slider/Slider";
const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect( () => {

        try {
            fetch('https://portfolio-react.donetianpetkov.com/projects.json')
                .then(res => res.json())
                .then(res => setProjects(res));
        } catch(err) {
            console.log(err);
        }

    },[]);

    const slides = projects.map((project) => {
        return <ProjectCard project={project} key={project.id}/>
    });

    return (
        <section id="projects" className={styles.projects}>

            <h1 className={styles.projects__title}>Projects</h1>

            <Slider components={slides}/>

        </section>
    )

}

export default Projects;