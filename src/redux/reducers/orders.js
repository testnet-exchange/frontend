export const initialState = {
  asks: [],
  bids: [],
}

export const setOrders = (state, { asks, bids }) => ({
  asks,
  bids,
})
