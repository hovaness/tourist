import styles from "components/Logo/logo.module.css"

function Logo({size = 'middle'}) {
  return (
    <div>
        {size == 'large' ? 
        (<p className={styles.logoLarge}>im.tour</p>) :
        (<p className={styles.logo}>im.tour</p>)} 
    </div>
  )
}

export default Logo