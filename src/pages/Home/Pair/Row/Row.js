import React, { Component } from 'react'


export default class Row extends Component {

  render() {
    const { row } = this.props

    if (row === undefined) {
      return null
    }

    const { cmvol, cmcost, cost, volume, price } = row


    return (
      <tr>
        <td>
          {cmvol}
        </td>
        <td>
          {cmcost}
        </td>
        <td>
          {cost}
        </td>
        <td>
          {volume}
        </td>
        <td>
          {price}
        </td>
      </tr>
    )
  }
}
