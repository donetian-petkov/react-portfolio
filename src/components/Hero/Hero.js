import styles from './Hero.module.css'
import {useEffect, useState} from "react";
import {withStatusOfLoading} from "../../hocs/withStatusOfLoading";

const Hero = (props) => {

    return (
        <div className={`${styles.hero} ${props.isLoaded ? "fadeIn" : ""}`}>
            <img className={styles.hero__image} src="https://www.donetianpetkov.com/wp-content/uploads/2023/09/hero.png"
                 alt="hero-image"/>
                <article className={`${styles.hero__text} ${props.isLoaded ? "scaleLoading" : ""}`}>
                    <h1>Hey, Donnie here!</h1>
                    <p>Traveller in spirit</p>
                    <p>Geek in mind</p>
                    <p>Cinephile by heart</p>
                </article>
        </div>
)

}

export default withStatusOfLoading(Hero);