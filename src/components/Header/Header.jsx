import React from 'react'
import './Header.css'

import { connect } from 'redaction'
import actions from '../../redux/actions'

import Nav from './Nav/Nav'
import { Button } from '../controls'


const Header = ({ name, ethBalance, btcBalance }) => (
  <header className="header">
    <Nav />
    <Button onClick={() => actions.modals.open('Sign', {})}>Sign up</Button>
    <Button onClick={() => actions.balance.fetch()}>Fetch balance</Button>
    <div>
      <p>Name: {name}</p>
      <p>Balance:</p>
      <p>ETH: {ethBalance}</p>
      <p>BTC: {btcBalance}</p>
    </div>
  </header>
)

export default connect({
  name: 'user.name',
  ethBalance: 'balance.eth.available',
  btcBalance: 'balance.btc.available',
})(Header)
