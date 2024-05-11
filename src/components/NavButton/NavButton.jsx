import React from 'react'
import styles from "components/NavButton/navButton.module.css"
import { Link } from 'react-router-dom'

function NavButton() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/">
              <img src='/src/assets/location.png'/>
          </Link>
          <img src='/src/assets/line.png'/>
          <Link to="/profile">
            <img src='/src/assets/user.png'/>
          </Link>
        </div>
    </div>
  )
}

export default NavButton