
export const setAuth = (state, { data: { token , user } }) => ({
  token,
  ...user,
})

export const setUser = (state, { data: { user } }) => ({
  ...user
})
