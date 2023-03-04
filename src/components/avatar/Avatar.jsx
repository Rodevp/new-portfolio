import ProfileImage from '../../assets/perfil.jpg'
import styles from './avatar.module.css'

function Avatar() {
  return (
    <div
        className={styles.avatar}
        
    >
        <img
            src={ProfileImage}
            alt="my personal photo"
            className={styles.image}
            loading="lazy"
        />
    </div>
  )
}

export default Avatar