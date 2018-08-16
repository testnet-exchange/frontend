import React, { Component } from 'react'

const RINKEBY = `https://rinkeby.etherscan.io/address`
const BITCOIN = `https://testnet.blockchain.info/address`

const linkTo = (url, address) =>
  <a href={`${url}/${address}`} target="_blank" rel="noreferrer noopener">
    {address || '...'}
  </a>

export default class Row extends Component {
  render() {
    const  { row: { name, address } } = this.props

    return (
      <tr>
        <td>{name}</td>
        <td>
          { name === 'BTC' ? linkTo(BITCOIN, address) : linkTo(RINKEBY, address) }
        </td>
      </tr>
    )

  }
}
