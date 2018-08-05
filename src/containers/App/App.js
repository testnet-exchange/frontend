import React, { Component } from 'react'
import actions from '../../redux/actions'

import Header from '../../components/Header/Header'
import ModalConductor from '../../components/modal/ModalConductor/ModalConductor'


export default class App extends Component {

  componentWillMount() {
    const { user: { id } } = JSON.parse(localStorage.getItem('userData'))

    if (id !== null) {
      actions.user.setUser(id)
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
