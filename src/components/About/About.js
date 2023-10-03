import styles from './About.module.css'

export const About = () => {

    return (
        <section id="about" className={styles.about}>
            <article className={styles.about__text}>
                <p>Hello! I'm a passionate cinephile with a deep love for the art of filmmaking, always eager to dive
                    into
                    the world of movies and explore diverse genres and cinematic expressions. But my interests don't
                    stop at
                    the silver screen! 🌐 I also have a penchant for traveling, exploring new horizons, and immersing
                    myself
                    in different cultures and landscapes. 📸 Capturing moments through the lens is another passion of
                    mine,
                    allowing me to freeze memories and share the beauty I encounter. 💻 Additionally, I enjoy crafting
                    websites, bringing ideas to life through creative design and coding. My diverse hobbies allow me to
                    see
                    the world through different lenses and continuously fuel my creativity and curiosity. Whether I'm in
                    a
                    movie theater, traversing new lands, behind the camera, or in front of a computer screen, I'm always
                    on
                    the lookout for new experiences and learning opportunities.</p>
            </article>
            <img className={styles.about__img} src="https://www.donetianpetkov.com/wp-content/uploads/2023/09/about_alt2.png"
                 alt="about-image"/>
        </section>
    )

}