import React from "react";
import styles from './Navbar.module.css';
import LogoNavbar from './assets/logo.svg';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div><img src={LogoNavbar} alt="Logo" className={styles.logo} /></div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>About</li>
                <li className={styles.navItem}>Projects</li>
                <li className={styles.navItem}>Contact</li>
                <li>
                    <a className={styles.resumeButton} href="#">Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
