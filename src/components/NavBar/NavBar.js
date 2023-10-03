import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
export const NavBar = () => {

    return (
        <nav id="top-menu" className={styles.topMenu}>
            <ul className={styles.topMenu__list}>
                <li className={styles.topMenu__list__menu}><Link to="/">Home</Link></li>
                <li className={styles.topMenu__list__menu}><Link to="/about">About</Link></li>
                <li className={styles.topMenu__list__menu}><Link to="/projects">Projects</Link></li>
                <li className={styles.topMenu__list__menu}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )

}