import React from 'react'
import './Header.css'

import { connect } from 'redaction'
import actions from '../../redux/actions'

import Nav from './Nav/Nav'
import { Button } from '../controls'


const Header = ({ name, ethAddress, btcAddress }) => (
  <header className="header">
    <Nav />
    <Button onClick={() => actions.modals.open('Sign', {})}>Sign up</Button>
    <div>
      <p>Name: {name}</p>
      <p>Eth: {ethAddress}</p>
      <p>Btc: {btcAddress}</p>
    </div>
  </header>
)

export default connect({
  name: 'user.name',
  ethAddress: 'user.eth',
  btcAddress: 'user.btc',
})(Header)


