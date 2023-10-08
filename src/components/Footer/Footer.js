import styles from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {faXTwitter} from "@fortawesome/free-brands-svg-icons/faXTwitter";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";  // Brands style


export const Footer = () => {

    return (
        <footer id="footer" className={styles.footer}>
            <p>Connect with me on:
                <a aria-label="link-to-twitter"  target="_blank" href="https://twitter.com/DonetianP" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>,
                <a aria-label="link-to-facebook"  target="_blank" href="https://www.facebook.com/rodger.nicklost/" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>,
                <a aria-label="link-to-instagram" target="_blank" href="https://www.instagram.com/dokkyto/" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            </p>
            <p>View my projects on <a aria-label="link-to-github"  target="_blank" href="https://github.com/donetian-petkov" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></p>
        </footer>
    )


}