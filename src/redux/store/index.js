import { createStore, combineReducers } from 'redaction'
import { createLogger } from 'redux-logger'
import localReducers from '../reducers'

const initialState = {} // (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}


const store = createStore({
  reducers: {
    ...combineReducers(localReducers),
  },
  middleware: [
  ].concat(process.env.NODE_ENV === 'production' ? [] : [
    createLogger(),
  ]),
  initialState,
})

export default store