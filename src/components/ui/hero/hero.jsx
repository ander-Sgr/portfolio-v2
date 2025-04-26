import React, { useState, useEffect } from "react";
import styles from './Hero.module.css'; // Importa los estilos

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
            </div>
        </section>
    )
}

export default Hero;
