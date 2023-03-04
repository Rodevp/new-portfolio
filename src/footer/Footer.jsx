import styles from "./footer.module.css"
import { COLORS } from "../colors"

function Footer() {
  return (
    <footer
        className={styles.footer}
    >
        <p
            className={styles.footerItem}
        >
            <a
                className={styles.link}
                href="https://www.linkedin.com/in/rodrigo-rodriguez-desarrolladormovil/"
                style={{ color: COLORS.white }}
                target="_blank"
            >
                Linkedin
            </a>
        </p>
        <p
            className={styles.footerItem}
        >
            <a
                className={styles.link}
                href="https://github.com/Rodevp"
                style={{ color: COLORS.white }}
                target="_blank"
            >
                Github
            </a>
        </p>
        <p
            className={styles.footerItem}
            style={{ color: COLORS.white }}
        >
            Hecho con React JS y hosteado en Vercel
        </p>
    </footer>
  )
}

export default Footer