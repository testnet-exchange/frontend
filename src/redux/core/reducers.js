import { wrapReducers } from 'redaction'
import reducers from '../reducers'
import store from '../store'


export default wrapReducers(reducers, store.dispatch)
