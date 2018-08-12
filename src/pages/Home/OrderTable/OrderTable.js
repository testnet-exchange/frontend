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
    actions.orders.fetchMyOrders({
      market: 'TESTNET3RINKEBY',
      limit: '100',
      interval: '0',
    })
  }


  render () {
    const { orders } = this.props

    if (!orders) return null

    const { asks, bids, myOrders } = orders

    const orderBookTitles = ['price', 'limit']
    const renderOrder = (row, index) => (
      <Row row={row} key={index} />
    )

    const genArray = (n) => Array(n).fill([])
    const firstN = (n) => (order, index) => index < n
    const ascending   = (o1,o2) => o1[0] - o2[0]
    const descending  = (o1,o2) => o2[0] - o1[0]

    const _asks = asks.filter(firstN(10)).sort(ascending)
    const _bids = bids.filter(firstN(10)).sort(descending)
    const _myOrders = [ ...myOrders, ...genArray(10) ].filter(firstN(10))

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <h3>Asks</h3>
              </td>
              <td>
                |
              </td>
              <td>
                <h3>Bids</h3>
              </td>
              <td>
                |
              </td>
              <td>
                <h3>My Orders</h3>
              </td>
            </tr>
            <tr>
              <td>
                <Table className="asks" titles={orderBookTitles} rows={_asks} rowRender={renderOrder}></Table>
              </td>
              <td>
                |
              </td>
              <td>
                <Table className="bids" titles={orderBookTitles} rows={_bids} rowRender={renderOrder}></Table>
              </td>
              <td>
                |
              </td>
              <td>
                <Table className="myorders" titles={orderBookTitles} rows={_myOrders} rowRender={renderOrder}></Table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect({
  orders: 'orders'
})(OrderTable)
