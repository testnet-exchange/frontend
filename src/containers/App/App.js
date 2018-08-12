import React, { Component } from 'react'
import actions from '../../redux/actions'

import './App.css'

import Header from '../../components/Header/Header'
import ModalConductor from '../../components/modal/ModalConductor/ModalConductor'


export default class App extends Component {

  componentWillMount() {
    this._fetchSavedUser()
  }

  _fetchSavedUser() {
    const access_token = localStorage.getItem('access_token')

    if (access_token) {
      actions.user.getMe(access_token)
    }
  }

  render() {
    const { children } = this.props

    return (
        <div className="App">
          <Header />
          {children}
          <ModalConductor />
        </div>
    )
  }
}
