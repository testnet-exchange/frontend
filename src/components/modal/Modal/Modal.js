import React, { Component } from 'react'

import actions from '../../../redux/actions'

export default class Modal extends Component {

  close = () => {
    const { name } = this.props

    actions.modals.close(name)
  }

  render() {
    const { children } = this.props

    return (
      <div className="modalTemplate">
        <button onClick={this.close} > Close</button>
        <div className="contentContainer">
          {children}
        </div>
      </div>
    )
  }
}

