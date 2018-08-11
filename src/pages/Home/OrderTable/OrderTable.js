import React, { Component } from 'react'
import { connect } from 'redaction'
import actions from '../../../redux/actions'

import Table from '../../../components/Table/Table'

import Row from './Row/Row'

import './OrderTable.css'

class OrderTable extends Component {

  componentWillMount() {
    actions.orders.getOrderbook({
      market: 'TESTNET3RINKEBY',
      limit: '100',
      interval: '0',
    })
  }


  render () {
    const { orders } = this.props

    if (!orders) return null

    const { asks, bids } = orders

    const orderBookTitles = ['price', 'limit']
    const renderOrder = (row, index) => (
      <Row row={row} key={index} />
    )

    return (
      <div>
        <h1>Registered</h1>
        <Table className="asks" titles={orderBookTitles} rows={asks} rowRender={renderOrder}></Table>
        <Table className="bids" titles={orderBookTitles} rows={bids} rowRender={renderOrder}></Table>
      </div>
    )
  }
}

export default connect({
  orders: 'orders'
})(OrderTable)
