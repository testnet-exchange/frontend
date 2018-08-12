import React, { Component } from 'react'
import './Modal.css'

import Close from './images/close.svg'
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
        <img src={Close} className="icon_close" alt="close icon" onClick={this.close} />
        <div className="contentContainer">
          {children}
        </div>
      </div>
    )
  }
}

