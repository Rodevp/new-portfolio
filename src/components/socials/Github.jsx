import GithubImage from "../../assets/github.svg"
import styles from "./github.module.css"
import { COLORS } from '../../colors'

function Github() {
  return (
    <a
      href="https://github.com/Rodevp"
      className={styles.box}
      style={{ backgroundColor: COLORS.gray }}
      target="_blank"
    >
      <img
        src={GithubImage}
        alt="github logo"
        style={ { width: "100%", height: "100%" } }
      />
    </a>
  )
}

export default Github