import React from 'react'
import './Nav.css'

import { NavLink } from 'react-router-dom'

const navigation = [
  { title: 'Home', link: '/', exact: true },
  { title: 'About', link: '/about' },
  { title: 'Contacts', link: '/contacts' },
]

const Nav = () => (
  <nav className="nav">
    {
      navigation.map(({ title, link, exact }) => (
        <NavLink
          to={link}
          exact={exact}
          activeClassName="activeLink"
          className="link"
          label={title}
          key={title}
        >
          {title}
        </NavLink>
      ))
    }
  </nav>
)

export default Nav
