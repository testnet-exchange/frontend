
export const setAuth = (state, { data: { token , user } }) => ({
  token,
  ...user,
})