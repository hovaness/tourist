import Logo from 'components/Logo/Logo'
import LogoWithNav from 'components/LogoWithNav/LogoWithNav'
import NavButton from 'components/NavButton/NavButton'
import styles from 'pages/Subscription/subscription.module.css'

function Subscription() {
  return (
    <>
      <div className={styles.container}>
        <Logo size='large' />
        <div className={styles.list}>
          <div className={styles.listItem}>
            <p>Заголовoк 1</p>
            <p>Тут будут условия</p>
            <img src="/src/assets/chevron.svg" />
          </div>
          <div className={styles.listItem}>
            <p>Заголовoк 2</p>
            <p>Значение 2</p>
            <img src="/src/assets/chevron.svg" />
          </div>
          <div className={styles.listItem}>
            <p>Заголовок 3</p>
            <p>Значение 3</p>
            <img src="/src/assets/chevron.svg" />
          </div>
        </div>
        <div className={styles.payment}>
          <button>75 ₽/Месяц</button>
          <button>800₽/Год</button>
        </div>
        <button className={styles.submit}>Оформить подписку</button>
      </div>
      <NavButton/>
    </>
  )
}

export default Subscription