import React, { Component } from 'react'
import { connect } from 'redaction'
import actions from '../../../redux/actions'

import Table from '../../../components/Table/Table'

import Row from './Row/Row'

import './OrderTable.css'

class OrderTable extends Component {

  componentWillMount() {
    setInterval(() => {
      actions.orders.getOrderbook({
        market: 'TESTNET3RINKEBY',
        limit: '100',
        interval: '0',
      })
    }, 500)
  }


  render () {
    const { orders } = this.props

    if (!orders) return null

    const { asks, bids } = orders

    const orderBookTitles = ['price', 'limit']
    const renderOrder = (row, index) => (
      <Row row={row} key={index} />
    )

    const ascending   = (o1,o2) => o2[0] - o1[0]
    // const descending  = (o1,o2) => o1[0] - o2[0]

    const _asks = asks.filter((order, index) => index < 10).sort(ascending)
    const _bids = bids.filter((order, index) => index < 10).sort(ascending)

    return (
      <div>
        <h3>Asks</h3>
        <Table className="asks" titles={orderBookTitles} rows={_asks} rowRender={renderOrder}></Table>
        <h3>Bids</h3>
        <Table className="bids" titles={orderBookTitles} rows={_bids} rowRender={renderOrder}></Table>
      </div>
    )
  }
}

export default connect({
  orders: 'orders'
})(OrderTable)
