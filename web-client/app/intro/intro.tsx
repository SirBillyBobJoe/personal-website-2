import styles from "./intro.module.css"
export default function Intro() {
    return (
        <div className={styles.introContainer}>
          <p className={styles.intro}>Hi, I'm <span className={styles.name}>Hosea</span> Tong-Ho</p>
          <p className={styles.title}>Software Engineering Student <br />from New Zealand</p>
        </div>
    )
}