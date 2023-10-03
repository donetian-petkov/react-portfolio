import styles from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => {

    return (
        <footer id="footer" className={styles.footer}>
            <p>Connect with me on:
                <a target="_blank" href="https://twitter.com/DonetianP"><FontAwesomeIcon icon="fa-brands fa-x-twitter" /></a>,
                <a target="_blank" href="https://www.facebook.com/rodger.nicklost/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>,
                <a target="_blank" href="https://www.instagram.com/dokkyto/"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
            </p>
            <p>View my projects on <a target="_blank" href="https://github.com/donetian-petkov"><FontAwesomeIcon icon="fa-brands fa-github" /></a></p>
        </footer>
    )


}