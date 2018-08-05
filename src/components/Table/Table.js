import React from 'react'
import './Table.css'


const Table = ({ titles, rows, rowRender }) => (
  <table className="table">
    <thead>
    <tr>
      {
        titles.map((title, index) => (
          <th key={index}>{title}</th>
        ))
      }
    </tr>
    </thead>
    <tbody>
    {  // eslint-disable-next-line
      rows.map((row, rowIndex) => {
        if (typeof rowRender === 'function') {
          return rowRender(row, rowIndex)
        }
      })
    }
    </tbody>
  </table>
)


export default Table
