import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  return (
    <div id='Nav'>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/blogs' >Blogs</Link></li>
        <li><Link to='/about' >About</Link></li>
        <li><Link to='/portfolio' >Portfolio</Link></li>
      </ul>
    </div>
  )
}

export default Nav