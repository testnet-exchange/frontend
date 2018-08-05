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

      reducer.user.sign({ data })
    })
}

const setUser = (id) => {
  const url = `https://testnet.exchange/api//users/${id}`
  axios.get(url)
    .then(result => console.log(result))
}

const sign = (name, password) => {
  const url = 'https://testnet.exchange/api/users/sign-up'

  axios.post(url, { "email": name, "password": password })
    .then(({ data }) => {

      localStorage.setItem('userData', JSON.stringify(data))
      reducer.user.setAuth({ data })
    })
}

export default {
  auth,
  sign,
  setUser,
}