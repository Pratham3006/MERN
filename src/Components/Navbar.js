import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <div className='Navbar'>
        <nav className='nav-link'>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
            <li>{props.item4}</li>
        </nav>

    </div>
  )
}
