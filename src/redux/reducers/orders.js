export const initialState = {
  asks: [],
  bids: [],
  myOrders: [],
}

export const setOrders = (state, { asks, bids }) => ({
  ...state,
  asks,
  bids,
})

export const createOrder = (state, { order }) => ({
  ...state,
  myOrders: [ ...state.myOrders, order ],
})
