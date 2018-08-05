import store from '../store'
import reducers from './reducers'


const getState = () => store.getState()


export {
  reducers,
  getState,
}
