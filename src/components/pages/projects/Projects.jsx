import React from "react";
import Card from "../../ui/card/Card";
import { FaPython, FaAmazon } from 'react-icons/fa';
import imgProject1 from './assets/ec2_manager.png';
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.cardContainer}>
            <Card
                imgProject={imgProject1}
                titleProject="EC2 Manager"
                description="Tool to manage EC2 instances easily."
                svgIcon={[<FaPython key="python" />, <FaAmazon key="aws" />]}
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
    );
};

export default Projects;