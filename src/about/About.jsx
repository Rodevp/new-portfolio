import styles from "./about.module.css"
import { COLORS } from "../colors"

function About() {
    return (
        <section
            className={styles.section}
        >
            <h2
                className={styles.title}
                style={{color: COLORS.purpleVeryLight}}
            >
                Sobre mi
            </h2>
            <p
                className={styles.me}
                style={{color: COLORS.purpleVeryLight}}
            >
                Desarrollador con experiencia en 
                desarrollo de software. Me especializo en construir aplicaciones móviles con React Native y web con React js.
                Me gusta experimentar y aprender sobre temas y buenas prácticas para construir aplicaciones de gran escala. 🤟
            </p>
        </section>
    )
}

export default About