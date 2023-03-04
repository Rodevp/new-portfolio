import styles from "./header.module.css"
import { COLORS } from "../colors"

function Header() {
    return (
        <header
            className={styles.header}
        >
            <a
                className={styles.itemMenu}
                href=""
                style={{ backgroundColor: COLORS.gray, color: COLORS.white }}
            >
                Inicio
            </a>
            <a
                className={styles.itemMenu}
                href=""
                style={{ backgroundColor: COLORS.gray, color: COLORS.white }}
            >
                Proyectos
            </a>
        </header>
    )
}

export default Header