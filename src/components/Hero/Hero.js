import styles from './Hero.module.css'

export const Hero = () => {


    return (
        <hero className={styles.hero}>
            <img className={styles.hero__image} src="https://www.donetianpetkov.com/wp-content/uploads/2023/09/hero.png"
                 alt="hero-image"/>
                <article className={styles.hero__text}>
                    <h1>Hey, Donnie here!</h1>
                    <p>Traveller in spirit</p>
                    <p>Geek in mind</p>
                    <p>Cinephile by heart</p>
                </article>
        </hero>
)

}