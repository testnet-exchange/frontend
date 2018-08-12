import React from 'react'

import Table from '../../../components/Table/Table'
import MyOrdersRow from './MyOrdersRow/MyOrdersRow'


const MyOrders = ({ titles, rows, title }) => (
  <div className="pair">
    <h3>{title}</h3>
    <Table
      titles={titles}
      rows={rows}
      rowRender={(row, index) => (
        <MyOrdersRow
          key={index}
          row={row}
        />
      )}
    />
  </div>
)

export default MyOrders
