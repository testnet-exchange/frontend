export const initialState = {
  asks: [],
  bids: [],
  myOrders: {},
  completed: {},
}

export const setOrders = (state, { asks, bids }) => ({
  ...state,
  asks,
  bids,
})

export const setCompletedOrders = (state, { completedOrders }) => ({
  ...state,
  completed: {
    ...completedOrders.map(({ price, amount, type }) => ({
      price,
      amount,
      type: type === 'sell' ? 'sell' : 'buy',
    }))
  }
})

export const setMyOrders = (state, { myOrders }) => ({
  ...state,
  myOrders: {
    ...myOrders.map(({ price, left, side, amount, market }) => ({
      price,
      left,
      side: side === 1 ? 'sell' : 'buy',
      amount,
      market,
    }))
  }
})
