import LinkedinImage from "../../assets/linkedin.svg"
import styles from "./linkedin.module.css"
import { COLORS } from '../../colors'

function Linkedin() {
  return (
    <a
      href="https://www.linkedin.com/in/rodrigo-rodriguez-desarrolladormovil/"
      className={styles.box}
      style={{ backgroundColor: COLORS.gray }}
      target="_blank"
    >
      <img
        src={LinkedinImage}
        alt="linkedin logo"
        style={ { width: "100%", height: "100%" } }
      />
    </a>
  )
}

export default Linkedin