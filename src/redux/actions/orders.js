import reducer from '../core/reducers'

import callApi from './api'

const getOrderbook = () =>
  callApi(`order.depth`, {
    market: 'TESTNET3RINKEBY',
    limit: '10',
    interval: '0',
  })
    .then(({ asks, bids }) =>
      reducer.orders.setOrders({ asks, bids }))

const getMarketStatus = (params) =>
  callApi(`market.status_today`, params)
    .then((status) => {})


const getСompletedOrders = () =>
  callApi(`market.deals`, {
    market: 'TESTNET3RINKEBY',
    limit: 10,
    last_id: 0,
  })
    .then(completedOrders => {
      reducer.orders.setCompletedOrders({ completedOrders })
    })

const fetchMyOrders = () =>
  callApi(`order.pending`, {
    market: 'TESTNET3RINKEBY',
    offset: 0,
    limit: 100
  })
    .then(({ records }) =>
      reducer.orders.setMyOrders({ myOrders: records }))

const createOrder = (params) =>
  callApi(`order.put_limit`, params)
    .then(result => console.log(result))

export default {
  getOrderbook,
  getMarketStatus,
  getСompletedOrders,
  createOrder,
  fetchMyOrders,
}
