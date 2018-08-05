import React, { Component } from 'react'

import Header from '../../components/Header/Header'
import ModalConductor from '../../components/modal/ModalConductor/ModalConductor'


export default class App extends Component {
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
