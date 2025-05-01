import React from "react";
import styles from './Hero.module.css';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroBackground}></div>

            <div className={styles.heroContent}>
                <h1>Hola, soy Anderson</h1>
                <h2>Cloud & Devops Enthusiast</h2>
                <p>
                    Entusiasta de la tecnología, con <strong>experiencia en web development y cloud</strong>, actualmente
                    estoy desarrollando mi carrera en Cloud, desarrollando proyectos en Python y desplegando
                    con Terraform en AWS.
                </p>
                <div className={styles.contactLinks}>
                    <a href="https://github.com/ander-Sgr" className={styles.contactButton + ' ' + styles.github} target="_blank" rel="noreferrer">
                        <SiGithub /> Github
                    </a>
                    <a href="https://www.linkedin.com/in/anderson-estrella-barreto/" className={styles.contactButton + ' ' + styles.linkedin} target="_blank" rel="noreferrer">
                        <SiLinkedin /> LinkedIn
                    </a>
                    <a href="mailto:andersonbarreto2001@gmail.com" className={styles.contactButton + ' ' + styles.gmail}>
                        <SiGmail /> Contactame
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
