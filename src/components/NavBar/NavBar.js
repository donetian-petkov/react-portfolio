import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
export const NavBar = () => {

    return (
        <nav id="top-menu" className={styles.topMenu}>
            <ul className={styles.topMenu__list}>
                <li className={styles.topMenu__list__menu}><Link to="/" className={styles.topMenu__list__menu__link}>Home</Link></li>
                <li className={styles.topMenu__list__menu}><Link to="/about" className={styles.topMenu__list__menu__link}>About</Link></li>
                <li className={styles.topMenu__list__menu}><Link to="/projects" className={styles.topMenu__list__menu__link}>Projects</Link></li>
                <li className={styles.topMenu__list__menu}><Link to="/contact" className={styles.topMenu__list__menu__link}>Contact</Link></li>
            </ul>
        </nav>
    )

}