import styles from './ProjectCard.module.css';

export const ProjectCard = ({
    project
                            }) => {

    return (
        <article id="movie-hunter" className={styles.projects__card}>
            <div className={styles.projects__card__img}>
                <a target="_blank" href="https://movie-hunter.donetianpetkov.com/">
                    <img className={styles.projects__card__img__front} id="movie-hunter-img"
                         src="https://www.donetianpetkov.com/wp-content/uploads/2023/09/movie-hunter.png"
                         alt="movie-hunter-img"/>
                    <img className={styles.projects__card__img__back} id="movie-hunter-img-2"
                         src="https://www.donetianpetkov.com/wp-content/uploads/2023/09/movie-hunter2.png"
                         alt="movie-hunter-img"/>
                </a>
            </div>
            <div className={styles.projects__card__text}>
                <a target="_blank" href="https://movie-hunter.donetianpetkov.com/"><h2>Movie Hunter</h2></a>
                <p>The website built on React is a cool spot for movie fans! It shows all the latest movies that are
                    out,
                    and each movie has its own page that features more info about the movie, its trailer, link to iMDB
                    and a
                    comment section. Plus, there’s a news section where you can catch up on all the latest gossip and
                    updates from the entertainment world.

                    You can also sign up and log in to share your thoughts about the movies. You can rate them and drop
                    comments to let others know what you think. It’s a fun and easy way to check out movies and chat
                    about
                    them with other movie lovers!
                </p>
            </div>
        </article>
    )

}