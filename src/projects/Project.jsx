import styles from "./project.module.css"
import { COLORS } from "../colors"
import Arrow from "../assets/arrow_right.svg"

function CardProject({ title, description, urls }) {
    return (
        <article
            className={styles.cardBackground}
        >
            <div
                className={styles.card}
            >
                <header
                    className={styles.titleCard}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    {title}
                </header>
                <p
                    className={styles.tech}
                    style={{ color: COLORS.purpleVeryLight }}
                >
                    {description}
                </p>
                <footer>
                    <a
                        href={urls.github}
                        className={styles.btn}
                        style={{ color: COLORS.white }}
                        target="_blank"
                    >
                        <p>
                            <span>
                                Código
                            </span>
                            <span>
                                <img
                                    src={Arrow}
                                    loading="lazy"
                                    height={20}
                                    width={20}
                                />
                            </span>
                        </p>
                    </a>
                    <a
                        href={urls.demo}
                        className={styles.btn}
                        style={{ color: COLORS.white }}
                        target="_blank"
                    >
                         <p>
                            <span>
                                Demo
                            </span>
                            <span>
                                <img
                                    src={Arrow}
                                    loading="lazy"
                                    height={20}
                                    width={20}
                                />
                            </span>
                        </p>
                    </a>
                </footer>
            </div>
        </article>
    )
}


function Project() {

    const projects = [
        {
            id: 0,
            title: "Disney plus clone",
            description: "React js, Styled Component",
            urls: {
                github: "",
                demo: ""
            }
        },
        {
            id: 1,
            title: "Disney plus clone",
            description: "React js, Styled Component",
            urls: {
                github: "",
                demo: ""
            }
        },
        {
            id: 2,
            title: "Disney plus clone",
            description: "React js, Styled Component",
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
            <div
                className={styles.projects}
            >
                {
                    projects.map(project => {
                        return <CardProject key={project.id} {...project} />
                    })
                }
            </div>
        </section>
    )
}

export default Project