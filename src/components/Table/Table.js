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
    {
      rows.length > 0 ? (
        rows.map((row, rowIndex) => typeof rowRender === 'function' ? rowRender(row, rowIndex) : null)
      ) : (
        <tr>
            <td>Table is empty</td>
        </tr>
      )
    }
    </tbody>
  </table>
)


export default Table
