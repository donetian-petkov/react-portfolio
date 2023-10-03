import styles from './NavBar.module.css'

export const NavBar = () => {

    return (
        <nav id="top-menu" className={styles.topMenu}>
            <ul className={styles.topMenu__list}>
                <li className={styles.topMenu__list__menu}>Home</li>
                <li className={styles.topMenu__list__menu}>About</li>
                <li className={styles.topMenu__list__menu}>Projects</li>
                <li className={styles.topMenu__list__menu}>Contact</li>
            </ul>
        </nav>
    )

}