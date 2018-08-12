import React from 'react'
import './Header.css'

import actions from '../../redux/actions'
import WidthContainer from '../layout/WidthContainer/WidthContainer'

import Nav from './Nav/Nav'
import Info from './Info/Info'
import { Button } from '../controls'


const Header = () => (
  <header className="header">
    <WidthContainer>
      <div className="row">
        <Nav />
        <Button onClick={() => actions.modals.open('Sign', {})}>Sign up</Button>
        <Button color="secondary" onClick={actions.balance.fetch}>Fetch balance</Button>
        <Info />
      </div>
    </WidthContainer>
  </header>
)

export default Header

