import React, { Fragment } from 'react'
import './Pair.css'

import Table from '../../../components/Table/Table'
import Row from './Row/Row'


const Pair = ({ titles, rows, title }) => (
  <div className="pair">
    <h3>{title}</h3>
    <Table
      titles={titles}
      rows={rows}
      rowRender={(row, index) => (
        <Row
          key={index}
          row={row}
        />
      )}
    />
  </div>
)

export default Pair
