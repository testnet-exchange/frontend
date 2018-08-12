import axios from 'axios'

import { getState } from '../../core'

import proto from './proto'

export const API_ROOT = `https://testnet.exchange/api`

const getAuthHeaders = access_token =>
  access_token ? {
    Authorization: `Bearer ${access_token}`
  } : {}

const sendRequest = (method, url, options) => axios.get(url, options)
    .then(({ data }) => data)
    .then(({ error, result }) => {
      if (error) {
        console.error(`[${method}]: error`, result)
        return Promise.reject(result)
      } else {
        console.info(`[${method}]: returned`, result)
        return result
      }
    })

export default (_method, _params = {}) => {
  const method = proto.find(m => m.name === _method)

  if (typeof method !== 'object') {
    throw new Error(`no method ${_method}`)
  }

  const { token: access_token } = getState().user


  if (method.role !== 'public') {
    if (typeof access_token !== 'string') {
      throw new Error(`Not enough access. Obtain token ${access_token}`)
    }
  }

  const url = `${API_ROOT}/trade/${method.role}/${method.name}`
  const headers = getAuthHeaders(access_token)

  const params = { ..._params }

  return sendRequest(method.name, url, { params, headers })
}
