import {ProjectCard} from "./ProjectCard/ProjectCard.js";

export const Projects = () => {

    const projectsArray = [];

    return (
        <section id="projects" className="projects">

            {
                projectsArray.map(x => <ProjectCard project={x}/>)
            }

        </section>
    )

}