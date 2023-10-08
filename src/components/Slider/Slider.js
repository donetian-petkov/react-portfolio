import React, { useState } from 'react';
import styles from './Slider.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

function Slider({ components }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
    };

    return (
        <div className={styles.slider}>
            <button aria-label="slider-button-left" className={styles.slider__button} onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} size="2xl" /></button>
            {components[currentIndex]}
            <button aria-label="slider-button-right" className={styles.slider__button} onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} size="2xl" /></button>
        </div>
    );
}

export default Slider;
