export const initialState = {}

export const open = (state, { name, data }) => ({
  ...state,
  [name]: {
    name,
    data,
  },
})

export const close = (state, name) => {
  const { [name]: closingModal, ...otherModals } = state

  return otherModals
}