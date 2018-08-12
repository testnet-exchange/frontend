import reducer from '../core/reducers'

import callApi from './api'

const getOrderbook = (params) =>
  callApi(`order.depth`, params)
    .then(({ asks, bids }) =>
      reducer.orders.setOrders({ asks, bids }))

const getMarketStatus = (params) =>
  callApi(`market.status_today`, params)
    .then((status) => {})

const fetchMyOrders = (params) =>
  callApi(`order.pending`, {
    market: params.market,
    offset: 0,
    limit: 100
  })
    .then(({ records }) =>
      reducer.orders.setMyOrders({ myOrders: records }))

const createOrder = (params) =>
  callApi(`order.put_limit`, params)
    .then(({ price, amount, left }) =>
      reducer.orders.createOrder([ price, left ]))

export default {
  getOrderbook,
  getMarketStatus,
  createOrder,
  fetchMyOrders,
}
