// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import styles from './BackToTopButton.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Check if button should be visible
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Smoothly scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={styles.scrollToTop}>
            {isVisible &&
                <button aria-label="back-to-top-button" onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} size="2xl" />
                </button>}
        </div>
    );
}

export default BackToTopButton;
