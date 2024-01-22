import Link from "next/link";
import styles from "./experience.module.css"

export default function Experience() {
    const experiences = [
        {
            logoSrc: "risos.png",
            title: "Software Engineering Intern at RisosEnterprises Ltd.",
            link: "https://www.risosenterprises.com"
        },
        {
            logoSrc: "nzpmc.png",
            title: "Full Stack Developer Intern at NZPMC",

            link: "https://www.nzpmc.com"
        },
        {
            logoSrc: "imc.png",
            title: "IMC Launchpad Programme Candidate",
           
            link: "https://www.imc.com"
        }
    ];

    return (
        <div className={styles.container}>
            {experiences.map((experience, index) => (
                <Link key={index} href={experience.link} className={styles.experience} target="_blank">
                    <p>
                        <img src={experience.logoSrc} />
                        {experience.title}
                    </p>

                </Link>
            ))}
        </div>
    )
}
