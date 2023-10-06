import {ProjectCard} from "./ProjectCard/ProjectCard.js";
import styles from './Projects.module.css'
import {useEffect, useState} from "react";
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

    },[])

    return (
        <section id="projects" className={styles.projects}>

            <h1 className={styles.projects__title}>Projects</h1>

            {
                projects.map(project => <ProjectCard key={project.id} project={project}/>)
            }

        </section>
    )

}

export default Projects;