import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Layout.scss'

function Layout(props) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href="/login.html">Logout</a>
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
