import Link from "next/link"
import styles from "./aboutMe.module.css"
import { RefObject, useState } from "react";
import Experience from "../experience/expereince";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Education from "../education/education";
import Skill from "../skill/skill";

export default function AboutMe() {
    const [chosen, setChosen] = useState("skill");

    const setSkill = () => {
        setChosen("skill")
    }

    const setExperience = () => {
        setChosen("experience")
    }

    const setEducation = () => {
        setChosen("education")
    }


    return (
        <div className={styles.aboutMeContainer}>
            <h1  className={styles.h1}>About Me</h1>
            <img src="/HeadShot.png" className={styles.pfp} />
            <div className={styles.subHead}>
                <img src="/whiteGithub.png" className={styles.social} />
                <img src="/LinkedIn.png" className={styles.social} />
                <Link className={styles.links} href={"/resume"} target="_blank">Résumé</Link>
                <Link className={styles.links} href={"/transcript"}target="_blank">Transcript</Link>

            </div>
            <p>I'm Hosea, a penultimate-year Software Engineering student at the University of Auckland.
                <br /><br />
                My passion lies in understanding the 'why' behind code, which fuels my learning and comprehension. Outside academics, I enjoy pushing my limits through hiking, tennis, and football,
                activities that shape my inspiration and drive.
                <br /><br />
                Looking ahead, I'm keen to apply my tech skills to projects with societal impact, aiming to solve meaningful problems and make a difference.
                <br /><br />
                Let's connect on LinkedIn or check out my GitHub for my latest projects.
            </p>
            <br />
            <div className={styles.assetsContainer}>
                <span onClick={setSkill} className={chosen == "skill" ? styles.assetsChosen : styles.assets}>Skills</span>
                <span onClick={setExperience} className={chosen == "experience" ? styles.assetsChosen : styles.assets}>Experience</span>
                <span onClick={setEducation} className={chosen == "education" ? styles.assetsChosen : styles.assets}>Education</span>
            </div>
            <div className={styles.para}>
                <TransitionGroup>
                    <CSSTransition
                        key={chosen}
                        timeout={500}
                        classNames={{
                            enter: styles.fadeEnter,
                            enterActive: styles.fadeEnterActive,
                            exit: styles.fadeExit,
                            exitActive: styles.fadeExitActive
                        }}
                        unmountOnExit
                    >
                        <div>
                            {chosen === "skill" && <Skill />}
                            {chosen === "experience" && <Experience />}
                            {chosen === "education" && <Education />}
                        </div>
                    </CSSTransition>
                </TransitionGroup>


            </div>
        </div>
    )
}