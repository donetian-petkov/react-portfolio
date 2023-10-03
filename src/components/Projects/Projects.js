import {ProjectCard} from "./ProjectCard/ProjectCard.js";
import styles from './Projects.module.css'
export const Projects = () => {

    const projectsArray = [1];

    return (
        <section id="projects" className={styles.projects}>

            {
                projectsArray.map(x => <ProjectCard project={x}/>)
            }

        </section>
    )

}