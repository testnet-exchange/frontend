import React, { Component } from 'react'


export default class Row extends Component {

  render() {
    const  { row:[ price, limit ] } = this.props

    return (
      <tr>
        <td>{price}</td>
        <td>{limit}</td>
      </tr>
    )

  }
}
