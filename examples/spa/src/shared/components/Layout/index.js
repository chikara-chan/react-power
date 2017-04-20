import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.scss'

function Layout(props) {
  return (
    <div className={styles.container}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      {props.children}
    </div>
  )
}

export default Layout
