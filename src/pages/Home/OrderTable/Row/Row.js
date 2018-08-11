import React from 'react'

const Row = ({ row: [ price, limit ] }) => (
  <tr>
    <td>{price}</td>
    <td>{limit}</td>
  </tr>
)

export default Row
