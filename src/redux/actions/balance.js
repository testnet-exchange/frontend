import reducer from '../core/reducers'

import callApi from './api'

const fetch = () =>
  callApi(`balance.query`)
    .then((list) => {
      reducer.balance.updateBalance({
        eth: list.RINKEBY,
        btc: list.TESTNET3,
      })
    })

export default {
  fetch,
}
