import styles from "./tech.module.css"
import { COLORS } from "../colors"
import ReactLogo from "../assets/react_logo.svg"

function Tecnologie ({ img, name }) {
    return (
        <p
            className={styles.tecnologie}
            style={{ color: COLORS.purpleVeryLight }}
        >
            <img
                className={styles.tecnologieImage}
                src={img}
                alt={`logo ${name}`}
                loading="lazy"
            />
            {name}
        </p>
    )
}


function Tech() {
  return (
    <section
        className={styles.section}
    >
        <h2
            className={styles.title}
            style={{ color: COLORS.purpleVeryLight }}
        >
            Tecnologias
        </h2>
        <div
            className={styles.contentTech}
        >
            <div>
                <h3
                    className={styles.titleTecnologie}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    Principales
                </h3>
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
            </div>
            <div className={styles.tools}>
                <h3
                    className={styles.titleTecnologie}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    Herramientas
                </h3>
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
            </div>
            <div className={styles.others}>
                <h3
                    className={styles.titleTecnologie}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    Otras
                </h3>
                <Tecnologie img={ReactLogo} name="React js" />
                <Tecnologie img={ReactLogo} name="React js" />
            </div>
        </div>
    </section>
  )
}

export default Tech