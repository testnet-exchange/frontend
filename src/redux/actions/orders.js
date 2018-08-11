import reducer from '../core/reducers'

import callApi from './api'

const getCreateLimitOrder = (params) =>
  callApi(`order.put_limit`, params)
    .then(data =>
      reducer.orders.createOrder(data))

const getOrderbook = (params) =>
  callApi(`order.depth`, params)
    .then(({ asks, bids }) =>
      reducer.orders.setOrders({ asks, bids }))

const getMarketStatus = (params) =>
  callApi(`market.status_today`, params)
    .then((status) => {})

export default {
  getOrderbook,
  getCreateLimitOrder,
  getMarketStatus,
}
