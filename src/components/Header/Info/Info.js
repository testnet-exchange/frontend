import React from 'react'
import { connect } from 'redaction'


const Info = ({ ethBalance, btcBalance }) => (
  <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
    <span >Your balance</span>
    <p style={{ marginLeft: '10px' }}>ETH: {ethBalance}</p>
    <p style={{ marginLeft: '10px' }}>BTC: {btcBalance}</p>
  </div>
)

export default connect({
  ethBalance: 'balance.eth.available',
  btcBalance: 'balance.btc.available',
})(Info)
