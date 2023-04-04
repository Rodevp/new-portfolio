import styles from "./hero.module.css"
import Avatar from "../components/avatar/Avatar"
import { COLORS } from "../colors"


function Hero() {
    return (
        <section
            className={styles.section}
        >
            <div
                className={styles.itemOne}
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
                    Desarrollador FullStack. React js/Node js 
                </p>
            </div>
            <div
                className={styles.contentAvatar}
            >
                <Avatar />
            </div>
        </section>
    )
}

export default Hero