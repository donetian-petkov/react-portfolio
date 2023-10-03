import styles from './ProjectCard.module.css';

export const ProjectCard = ({
    project
                            }) => {

    return (
        <article id={project.id} className={styles.projects__card}>
            <div className={styles.projects__card__img}>
                <a target="_blank" href={project.link}>
                    <img className={styles.projects__card__img__front} id="movie-hunter-img"
                         src={project.img}
                         alt="movie-hunter-img"/>
                    <img className={styles.projects__card__img__back} id="movie-hunter-img-2"
                         src={project.img2}
                         alt="movie-hunter-img"/>
                </a>
            </div>
            <div className={styles.projects__card__text}>
                <a target="_blank" href={project.link}><h2>{project.title}</h2></a>
                <p>{project.descr}</p>
            </div>
        </article>
    )

}