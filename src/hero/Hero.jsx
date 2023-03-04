import styles from "./hero.module.css"
import { COLORS } from "../colors"


function Hero() {
    return (
        <section
            className={styles.section}
        >
            <h1
                className={styles.title}
                style={{ color: COLORS.purpleVeryLight }}
            >
                Rodrigo Rodriguez
            </h1>
            <p
                className={styles.p}
                style={{ color: COLORS.purpleVeryLight }}
            >
                Desarrollador Front-End. React js/React Native
            </p>
        </section>
    )
}

export default Hero