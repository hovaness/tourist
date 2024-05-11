import { Slider } from 'antd'
import styles from 'components/Player/player.module.css'
import React from 'react'

function Player() {
  return (
    <div className={styles.container}>
        <Slider style={{}} defaultValue={30}/>
        <div>
            d
        </div>
    </div>
  )
}

export default Player