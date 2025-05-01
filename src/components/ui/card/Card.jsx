import React from "react";
import styles from './Card.module.css'

const Card = ({ imgProject, titleProject, description, svgIcon = [], urlDemo, urlCode }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.imageBackground} style={{ backgroundImage: `url(${imgProject})` }}></div>
                <img src={imgProject} alt="img_project" className={styles.projectImage} />
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.projectTitle}>{titleProject}</h2>
                <p className={styles.projectDescription}>{description}</p>
                <div className={styles.techStack}>
                    {svgIcon.map((icon, index) => (
                        <span key={index}>{icon}{icon.key}</span>
                    ))}
                </div>
                <div className={styles.buttonsContainer}>
                    <a className={styles.buttonLink} href={urlDemo} target="_blank" rel="noopener noreferrer">Demo</a>
                    <a className={styles.buttonLink} href={urlCode} target="_blank" rel="noopener noreferrer">Code</a>
                </div>
            </div>

        </div>
    )
}

export default Card