import reducer from '../core/reducers'

import callApi from './api'

const fetch = () =>
  callApi(`balance.query`)
    .then(({ RINKEBY, TESTNET3 }) => {
      reducer.balance.updateBalance({
        eth: RINKEBY,
        btc: TESTNET3,
      })
    })

export default {
  fetch,
}
