import styles from "./project.module.css"
import { COLORS } from "../colors"

function CardProject({ title, teconologies, urls}) {
    return (
        <div
            className={styles.cardBackground}
        >
            <div
                className={styles.card}
            >
                <h3
                    className={styles.titleCard}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    {title}
                </h3>
                <p
                    className={styles.tech}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    {teconologies}
                </p>
                <div>
                    <a
                        href={urls.github}
                        className={styles.btn}
                        style={{ color: COLORS.white, backgroundColor: COLORS.gray }}
                        target="_blank"
                    >
                            Código
                        </a>
                    <a
                        href={urls.demo}
                        className={styles.btn}
                        style={{ color: COLORS.white, backgroundColor: COLORS.gray }}
                        target="_blank"
                    >
                        Demo
                    </a>
                </div>
            </div>
        </div>
    )
}


function Project() {

    const projects = [
        {
            id: 0,
            title: "Disney plus clone",
            teconologies: "React js, Styled Component",
            urls: {
                github: "",
                demo: ""
            }
        },
        {
            id: 1,
            title: "Disney plus clone",
            teconologies: "React js, Styled Component",
            urls: {
                github: "",
                demo: ""
            }
        },
        {
            id: 2,
            title: "Disney plus clone",
            teconologies: "React js, Styled Component",
            urls: {
                github: "",
                demo: ""
            }
        }
    ]


  return (
    <section
        className={styles.section}
    >
        <h2
            className={styles.title}
            style={{ color: COLORS.purpleVeryLight }}
        >
            Proyectos
        </h2>
        {
            projects.map( project => {
                return <CardProject  key={project.id} {...project} />
            })
        }
    </section>
  )
}

export default Project