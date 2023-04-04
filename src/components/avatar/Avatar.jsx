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
            height={130}
            width={130}
            fetchpriority="high"
        />
    </div>
  )
}

export default Avatar