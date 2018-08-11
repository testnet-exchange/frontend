import reducer from '../core/reducers'
import axios from 'axios'

const API_ROOT = `https://testnet.exchange/api`
const getAuthHeaders = (access_token) => ({
  Authorization: `Bearer ${access_token}`
})

const callMethod = (access_token, method, params, level = 'public') => {
  const url = `${API_ROOT}/trade/${level}/${method}`
  const headers = getAuthHeaders(access_token)

  return axios.get(url, { params, headers })
    .then(({ data: { error, result } }) => {
      if (error) {
        console.error(`[${method}]: error`, error.name)
        return
      } else {
        console.info(`[${method}]: returned`, result)
        return result
      }
    })
}

// ^ helpers?

const getCreateLimitOrder = (access_token, params) =>
  callMethod(access_token, `order.put_limit`, params)
    .then((data) => {
      console.log('new order', data)
      // reducer.orders.setMyOrders({ data })
    })

const getOrderbook = (access_token, params) =>
  callMethod(access_token, `order.depth`, params)
    .then(({ asks, bids }) => {
      console.log('orderbook', asks, bids)
      reducer.orders.setOrders({ asks, bids })
    })

const getMarketStatus = (access_token, params) =>
  callMethod(access_token, `market.status_today`, params)
    .then((status) => {

    })

export default {
  getOrderbook,
}
