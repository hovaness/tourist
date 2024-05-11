import LogoWithNav from "components/LogoWithNav/LogoWithNav"
import styles from "pages/Settings/settings.module.css"

function Settings() {
  return (
    <>
      <div className={styles.container}>
          <img className={styles.settings} src="/src/assets/settings.svg"/>
          <button disabled = {true}>Настройки</button>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <p>Получать уведомления</p>
              <img src="/src/assets/chevron.svg"/>
            </div>
            <div className={styles.listItem}>
              <p>Удалить покупки</p>
              <img src="/src/assets/chevron.svg"/>
            </div>
            <div className={styles.listItem}>
              <p>Восстановить покупки</p>
              <img src="/src/assets/chevron.svg"/>
            </div>
          </div>
      </div>
      <LogoWithNav/>
    </>
  )
}

export default Settings