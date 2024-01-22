'use client'
import Link from "next/link";
import styles from "./project.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { RefObject } from "react";

const projects = [
    {
        href: "https://github.com/SirBillyBobJoe/Qt5Camera",
        title: "Microscope Camera",
        images: "/microscope1.png",
        reportLink: "/microscopeReport"
    },
    {
        href: "https://github.com/SirBillyBobJoe/The-Singularity-Escape-Room-Game",
        title: "The Singularity Escape Room Game",
        images: "/singularity.gif",
        reportLink: "/escapeRoomReport"
    },
    {
        href: "https://github.com/SirBillyBobJoe/VideoStreamingPlatform",
        title: "Video Streaming Platform",
        images: "/videoStream1.png",
        websiteLink: "https://video-streaming-platform.hoseatongho.com"
    }
];


export default function Project() {
    return (
        <div className={styles.container} >
            <h1 className={styles.h1}>Projects</h1>
            <div className={styles.projectContainer}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.project}>
                        <Link href={project.href} target="_blank" className={styles.link}>
                            <h3>{project.title}</h3>
                            <div className={styles.image}>
                                <img src={project.images}className={styles.imageSlider}/>
                            </div>
                        </Link>
                        <div className={styles.buttons}>

                            {project.websiteLink && <Link className={styles.report} href={project.websiteLink} target="_blank">
                                <span>Go To Website</span>
                            </Link>}
                            {project.reportLink && <Link className={styles.report} href={project.reportLink}target="_blank">
                                <span>Read The Report</span>
                            </Link>}
                            <Link className={styles.report} href={project.href} target="_blank">
                                <span>Go To GitHub</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
