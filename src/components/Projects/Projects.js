import {ProjectCard} from "./ProjectCard/ProjectCard.js";
import styles from './Projects.module.css'
import {useEffect, useState} from "react";
export const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect( () => {

        try {
            fetch('https://portfolio-react.donetianpetkov.com/projects.json')
                .then(res => res.json())
                .then(res => setProjects(res));
        } catch(err) {
            console.log(err);
        }

    },[projects])

    return (
        <section id="projects" className={styles.projects}>

            {
                projects.map(project => <ProjectCard key={project.id} project={project}/>)
            }

        </section>
    )

}