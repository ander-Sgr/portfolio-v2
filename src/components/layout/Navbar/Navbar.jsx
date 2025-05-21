import React, { useState, useEffect } from "react";
import styles from './Navbar.module.css';
import LogoNavbar from './assets/logo.svg';
import { VscMenu, VscClose } from "react-icons/vsc";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 650;
            setIsMobile(mobile);
            if (!mobile && menuOpen) {
                closeMenu(); 
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]); 
    
    useEffect(() => {
        if (menuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen, isMobile]);

    return (
        <nav className={styles.nav}>
            <div className={styles.navHeader}>
                <img src={LogoNavbar} alt="Logo" className={styles.logo} />
                <button
                    className={styles.menuButton}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} 
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <VscClose size={28} /> : <VscMenu size={28} />}
                </button>
            </div>
            {/* Este contenedor se convierte en el menú lateral en móvil */}
            <div className={`${styles.navLinksContainer} ${menuOpen ? styles.open : ''}`}>
                <ul className={styles.navList}>
                    {/* Enlaces como navItems */}
                    <li className={styles.navItem} onClick={isMobile ? closeMenu : undefined}>Experiencia</li>
                    <li className={styles.navItem} onClick={isMobile ? closeMenu : undefined}>Proyectos</li>
                    <li className={styles.navItem} onClick={isMobile ? closeMenu : undefined}>Sobre mi</li>
                </ul>
                {/* Contenedor separado para el botón para facilitar el estilo/animación en móvil */}
                <div className={styles.resumeButtonContainer}>
                    <a
                        className={styles.resumeButton}
                        href="#"
                        onClick={isMobile ? closeMenu : undefined}
                    >
                        Resume
                    </a>
                </div>
            </div>

            {/* Overlay para cerrar el menú al hacer clic fuera */}
            {/* Aplicamos la clase 'open' también al overlay para la transición */}
            <div
                className={`${styles.overlay} ${menuOpen ? styles.open : ''}`}
                onClick={closeMenu} // Cierra el menú al hacer clic en el overlay
            ></div>
        </nav>
    );
};

export default Navbar;