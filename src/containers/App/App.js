import React, { Component } from 'react'
import actions from '../../redux/actions'

import Header from '../../components/Header/Header'
import ModalConductor from '../../components/modal/ModalConductor/ModalConductor'


export default class App extends Component {

  componentWillMount() {
    this._fetchSavedUser()
  }

  _fetchSavedUser() {
    const userData = JSON.parse(localStorage.getItem('userData'))

    if (!userData) return
    if (!userData.user) return
    if (!userData.user.id) return

    const { user: { id } } = userData

    actions.user.setUser(id)
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
