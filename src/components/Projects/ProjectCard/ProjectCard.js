import styles from './ProjectCard.module.css';
import {withStatusOfLoading} from "../../../hocs/withStatusOfLoading";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({
    project,
isLoaded
                            }) => {

    return (
        <article id={project.id} className={styles.projects__card}>
            <img className={`${styles.projects__card__img} ${isLoaded ? "scaleLoading" : ""}`} id={`${project.id}_img`}
                 src={project.img}
                 alt={`${project.id}_alt`}/>
            <a aria-label="link-to-project" target="_blank" className={styles.projects__card__link} href={project.link}><h2>{project.title}</h2></a>
            <div className={styles.projects__card__links}>
                <a aria-label="link-to-project" target="_blank" href={project.link}><FontAwesomeIcon icon={faLink} size="xl"/></a>
                <a aria-label="link-to-github" target="_blank" href={project.githubLink}><FontAwesomeIcon icon={faGithub} size="xl"/></a>
            </div>
            <p className={styles.projects__card__descr}>{project.descr}</p>
        </article>
    )

}

export default withStatusOfLoading(ProjectCard);

