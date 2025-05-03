import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import LogoNavbar from './assets/logo.svg';
import { VscMenu, VscClose } from "react-icons/vsc";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Cerrar menú automáticamente si cambia a desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 650 && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    return (
        <nav className={styles.nav}>
            <div className={styles.navHeader}>
                <img src={LogoNavbar} alt="Logo" className={styles.logo} />
                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    {menuOpen ? <VscClose size={28} /> : <VscMenu size={28} />}
                </button>
            </div>
            <ul className={`${styles.navList} ${menuOpen ? styles.open : ''}`}>
                <li className={styles.navItem}>Experiencia</li>
                <li className={styles.navItem}>Proyectos</li>
                <li className={styles.navItem}>Sobre mi</li>
                <li>
                    <a className={styles.resumeButton} href="#">Resume</a>
                </li>
            </ul>
            {/* Overlay solo visible si el menú está abierto */}
            {menuOpen && (
                <div className={styles.overlay} onClick={() => setMenuOpen(false)}></div>
            )}
        </nav>
    );
};

export default Navbar;
