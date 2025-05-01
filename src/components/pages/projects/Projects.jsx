import React from "react";
import Card from "../../ui/card/Card";
import { FaPython, FaAmazon, FaCode } from 'react-icons/fa';
import imgProject1 from './assets/ec2_manager.png';
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <section className={styles.projectsContainer}>
            <h2 className={styles.projectTitle}>
                <span><FaCode /></span>
                Proyectos
            </h2>
            <p className={styles.descriptionProjects}>Algunos proyectos en los que he trabajado</p>
            <div className={styles.cardContainer}>
                <Card
                    imgProject={imgProject1}
                    titleProject="EC2 Manager"
                    description="Herramienta de CLI para gestionar EC2 en aws, fue realizado con fines practicos, 
                    puedes apagar, detenerlas."
                    svgIcon={[<FaPython key="Python" />, <FaAmazon key="aws" />]}
                    urlDemo="https://demo.com"
                    urlCode="https://github.com"
                />
                
                <Card
                    imgProject={imgProject1}
                    titleProject="EC2 Manager"
                    description="Tool to manage EC2 instances easily."
                    svgIcon={[<FaPython key="python" title="Python" />, <FaAmazon key="aws" />]}
                    urlDemo="https://demo.com"
                    urlCode="https://github.com"
                />

            </div>
        </section>

    );
};

export default Projects;