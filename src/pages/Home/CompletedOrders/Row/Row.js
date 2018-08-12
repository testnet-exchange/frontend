import React, { Component } from 'react'


export default class Row extends Component {

  render() {
    const  { row: { price, amount, type } } = this.props

    return (
      <tr style={ type ? { background: 'rgba(252, 10, 10, 0.1)' } : { background: 'rgba(22, 252, 10, 0.1)' }}>
        <td>{price}</td>
        <td>{amount}</td>
      </tr>
    )
  }
}
