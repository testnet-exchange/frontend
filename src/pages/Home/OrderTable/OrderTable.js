import React, { Component } from 'react'

import { connect } from 'redaction'
import actions from '../../../redux/actions'

import './OrderTable.css'

import Pair from '../Pair/Pair'
import MyOrders from '../MyOrders/MyOrders'
import CompletedOrders from '../CompletedOrders/CompletedOrders'


class OrderTable extends Component {

  componentWillMount() {
    // setInterval(() => {
    //  
    // }, 1000)
    actions.orders.fetchMyOrders()
    actions.orders.getOrderbook()
    actions.orders.getСompletedOrders()
  }

  filterRequest = (arr, sort) => {
    const ascending   = (o1,o2) => o1[0] - o2[0]
    const descending  = (o1,o2) => o2[0] - o1[0]

    return arr.sort(sort ? ascending : descending)
  }


  render () {
    const orderBookTitles = ['PRICE', 'LIMIT']
    const { orders } = this.props

    if (!orders) return null

    const { asks, bids, myOrders, completed  } = orders

    console.log(this.filterRequest(asks, true))

    return (
      <div className="rowTabele">
        <Pair
          title="Bids"
          rows={this.filterRequest(bids, false)}
          titles={orderBookTitles}
        />
        <Pair
          title="Asks"
          rows={this.filterRequest(asks, true)}
          titles={orderBookTitles}
        />
        <MyOrders
          title="My orders"
          rows={this.filterRequest([...Object.keys(myOrders).map(k => myOrders[k])], true)}
          titles={['PRICE', 'LIMIT', 'MARKET', 'AMOUNT']}
        />
        <CompletedOrders
          title="Last completed orders"
          rows={this.filterRequest([...Object.keys(completed).map(k => completed[k])], true)}
          titles={['PRICE', 'AMOUNT']}
        />
      </div>
    )
  }
}

export default connect({
  orders: 'orders',
})(OrderTable)
