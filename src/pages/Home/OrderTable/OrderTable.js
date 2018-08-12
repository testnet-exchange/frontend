import React, { Component } from 'react'

import { connect } from 'redaction'
import actions from '../../../redux/actions'

import './OrderTable.css'

import Pair from '../Pair/Pair'


class OrderTable extends Component {

  componentWillMount() {
    // setInterval(() => {
    //
    // }, 500)

    actions.orders.getOrderbook({
      market: 'TESTNET3RINKEBY',
      limit: '100',
      interval: '0',
    })

    actions.orders.fetchMyOrders({
      market: 'TESTNET3RINKEBY',
      limit: '100',
      interval: '0',
    })
  }

  filterRequest = (arr, sort) => {
    const firstN = (n) => (order, index) => index < n

    const ascending   = (o1,o2) => o1[0] - o2[0]
    const descending  = (o1,o2) => o2[0] - o1[0]

    return arr.filter(firstN(10)).sort(sort ? ascending : descending)
  }


  render () {
    const orderBookTitles = ['PRICE', 'LIMIT']
    const { orders } = this.props

    if (!orders) return null

    const { asks, bids, myOrders  } = orders
    const genArray = (n) => Array(n).fill([])

    return (
      <div className="rowTabele">
        <Pair
          title="ASKS"
          rows={this.filterRequest(asks, true)}
          titles={orderBookTitles}
        />
        <Pair
          title="BIDS"
          rows={this.filterRequest(bids, false)}
          titles={orderBookTitles}
        />
        <Pair
          title="My orders"
          rows={this.filterRequest([ ...myOrders, ...genArray(10) ], true)}
          titles={orderBookTitles}
        />
      </div>
    )
  }
}

export default connect({
  orders: 'orders',
})(OrderTable)
