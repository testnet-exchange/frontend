import React from 'react'

import { NavLink } from 'react-router-dom'


const navigation = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'Contacts', link: '/contacts' },
]

const Nav = () => (
  <nav>
    {
      navigation.map(({ title, link }) => (
        <NavLink
          exact
          key={title}
          className="link"
          to={link}
          activeClassName="active__link"
        >
          {title}
        </NavLink>
      ))
    }
  </nav>
)

export default Nav
