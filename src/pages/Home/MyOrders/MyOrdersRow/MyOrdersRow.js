import React, { Component } from 'react'


export default class MyOrdersRow extends Component {

  render() {
    const  { row: { price, left, side, amount, market } } = this.props

    return (
      <tr style={ side === 'buy' ? { background: 'rgba(252, 10, 10, 0.1)' } : { background: 'rgba(22, 252, 10, 0.1)' }}>
        <td>{price}</td>
        <td>{left}</td>
        <td>{market}</td>
        <td>{amount}</td>
      </tr>
    )
  }
}
