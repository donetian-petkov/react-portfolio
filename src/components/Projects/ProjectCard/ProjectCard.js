import styles from './ProjectCard.module.css';

export const ProjectCard = ({
    project
                            }) => {

    return (
        <article id={project.id} className={styles.projects__card}>
            <img className={styles.projects__card__img} id={`${project.id}_img`}
                 src={project.img}
                 alt={`${project.id}_alt`}/>
            <a aria-label="link-to-project" target="_blank" className={styles.projects__card__link} href={project.link}><h2>{project.title}</h2></a>
            <p className={styles.projects__card__descr}>{project.descr}</p>
        </article>
    )

}

