import styles from 'pages/Profile/profile.module.css'
import Logo from 'components/Logo/Logo'
import NavButton from 'components/NavButton/NavButton'
import { Link } from 'react-router-dom'
import LogoWithNav from 'components/LogoWithNav/LogoWithNav'

function Profile() {
  return (
    <div className={styles.container}>
        <img className={styles.avatar} src='/src/assets/avatar.svg'/>
        <h1 className={styles.name}>Имя пользователя</h1>
        <div className={styles.buttons}>
            <Link to="/subscription">
                <button>Оформить подиску</button>
            </Link>
            <Link to="/settings">
                <button>Настройки</button>
            </Link>
        </div>
        <LogoWithNav/>
    </div>
  )
}

export default Profile