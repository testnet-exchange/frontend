import React, { Component, Fragment } from 'react'
import { connect } from 'redaction'
import actions from '../../../redux/actions'

import Pair from '../Pair/Pair'

import './Registered.css'

class Registered extends Component {

  componentWillMount() {
    const access_token = localStorage.getItem('access_token')

    if (access_token) {
      actions.orders.getOrderbook(access_token, {
        market: 'TESTNET3RINKEBY',
        limit: '100',
        interval: '0'
      })
    }
  }

  render () {
    const { orders } = this.props

    if (!orders) return null

    const { asks, bids } = orders

    return (
      <div>
        <h1>Registered</h1>
        {
          asks.map((a, index) => (
            <Fragment key={index}>
              <span>Price {a[0]}</span>
              <span>Limit {a[1]}</span>
              <br />
            </Fragment>
          ))
        }
        {
          bids.map((a, index) => (
            <Fragment key={index}>
              <span>Price {a[0]}</span>
              <span>Limit {a[1]}</span>
              <br />
            </Fragment>
          ))
        }
      </div>
    )
  }
}

export default connect({
  orders: 'orders'
})(Registered)
