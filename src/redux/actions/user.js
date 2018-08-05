import reducer from '../core/reducers'


const login = (name, password) => {

  const btc = generate(name)
  const eth = generate(password)
  const id = Math.pow(password.length, Math.random())

  reducer.user.login({ name, id, eth, btc, btcBalance: 13, ethBalance: 274 })
}

const generate = (value) => {
  const possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

  for (let i = 0; i < 5; i++) {
    value += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return value
}

export default {
  login,
}