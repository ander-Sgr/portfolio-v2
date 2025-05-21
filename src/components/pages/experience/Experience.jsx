import React from "react";
import styles from './Experience.module.css'
import { MdWorkHistory } from "react-icons/md";

const experiences = [
    {
        year: "2023 - 2024",
        role: "IT Support",
        company: "Accenture",
        description: "",
        stack: "Hardware, Redes, Ticketing Tool Resolucion de Incidencias"
    },
    {
        year: "2022 - 2023",
        role: "Web Developer (Internship)",
        company: "Travelport",
        description: `- Desarrollo frontend con JavaScript y ReactJS.\n
- Implementación de pruebas end-to-end con Gherkin y Cucumber.\n
- Aplicación de metodologías ágiles en proyectos de software.\n
- Contribución al proyecto de traducción de textos en los repositorios de la organización.`,
        stack: "JavaScript, ReactJS, Gherkin, Cucumber"
    },
];


const Experience = () => (
    <section className={styles.expirienceContainer}>
        <h2 className={styles.expirienceTitle}>
            <span><MdWorkHistory /></span>
            Experiencia Laboral
        </h2>
        <div className={styles.timeline}>
            {experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                    <span className={styles.date}>{exp.year}</span>
                    <div className={styles.content}>
                        <h3>{exp.role}</h3>
                        <p>{exp.company} | {exp.stack}</p>
                        <p>
                            {exp.description.split('\n').map((line, idx) => (
                                <React.Fragment key={idx}>
                                    {line.trim()}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
export default Experience