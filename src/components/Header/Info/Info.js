import React from 'react'
import { connect } from 'redaction'


const Info = ({ ethBalance, btcBalance }) => (
  <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
    <span >Your balance</span>
    <p style={{ marginLeft: '10px' }}>ETH: {Number(ethBalance).toFixed(5)}</p>
    <p style={{ marginLeft: '10px' }}>BTC: {Number(btcBalance).toFixed(5)}</p>
  </div>
)

export default connect({
  ethBalance: 'balance.eth.available',
  btcBalance: 'balance.btc.available',
})(Info)
