import reducer from '../core/reducers'
import axios from 'axios'


const auth = (name, password) => {
  const url = 'https://testnet.exchange/api/auth'

  axios.post(url, '', {
    headers: {
      Authorization: `Basic ${btoa(`${name}:${password}`)}`,
    }
  })
    .then(({ data }) => {
      reducer.user.setAuth({ data })
    })
}

export default {
  auth,
}