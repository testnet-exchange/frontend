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

export const setMyOrders = (state, { myOrders }) => ({
  ...state,
  myOrders: myOrders.map(({ price, left }) => [ price, left ]),
})

export const createOrder = (state, order) => ({
  ...state,
  myOrders: [ ...state.myOrders, order ],
})
