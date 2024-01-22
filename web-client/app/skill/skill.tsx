import Link from "next/link";
import styles from "./skill.module.css"

export default function Skill() {


    return (
        <div className={styles.container}>
            Languages: Java, Python, C, C++, JavaScript, TypeScript, MATLAB, R
            <br /><br />
            Tools:  Docker, Firestore, MongoDB, Google Cloud, Qt, Node, React, Express
        </div>
    )
}
