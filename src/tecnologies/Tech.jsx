import styles from "./tech.module.css"
import { COLORS } from "../colors"
import ReactLogo from "../assets/react_logo.svg"
import ReactNTLogo from "../assets/react_native_logo.svg"
import TSLOGO from "../assets/typescript_logo.svg"
import ViteLogo from "../assets/vitejs_logo.svg"
import GitLogo from "../assets/git_logo.svg"
import PyLogo from "../assets/python_logo.svg"
import AstroLogo from "../assets/astro_logo.svg"
import NextLogo from "../assets/nextjs_logo.svg"

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
                height={20}
                width={20}
                fetchpriority="high"
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
                <Tecnologie img={TSLOGO} name="TypeScript" />
                <Tecnologie img={NextLogo} name="Next Js" />
            </div>
            <div className={styles.tools}>
                <h3
                    className={styles.titleTecnologie}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    Herramientas
                </h3>
                <Tecnologie img={GitLogo} name="Git" />
                <Tecnologie img={ViteLogo} name="Vite js" />
            </div>
            <div className={styles.others}>
                <h3
                    className={styles.titleTecnologie}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    Otras
                </h3>
                <Tecnologie img={PyLogo} name="Python" />
                <Tecnologie img={AstroLogo} name="Astro js" />
                <Tecnologie img={ReactNTLogo} name="React Native" />
            </div>
        </div>
    </section>
  )
}

export default Tech