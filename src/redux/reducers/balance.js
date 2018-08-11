// import BigNumber from 'bignumber.js'

export const initialState = {
  eth: { available: "0", freeze: "0" },
  btc: { available: "0", freeze: "0" },
}

export const updateBalance = (state, { eth, btc }) => ({
  ...state,
  eth,
  btc,
})
