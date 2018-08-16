
export const setAuth = (state, { data: { token , user } }) => ({
  ...state,
  token,
  ...user,
})

export const setUser = (state, { data: { user } }) => ({
  ...state,
  ...user,
})

export const setDepositAddress = (state, { data: { address } }) => ({
  ...state,
  address,
})
