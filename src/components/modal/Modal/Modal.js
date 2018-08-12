import React, { Component } from 'react'
import './Modal.css'

import actions from '../../../redux/actions'
import { Button } from '../../controls'


export default class Modal extends Component {

  close = () => {
    const { name } = this.props

    actions.modals.close(name)
  }

  render() {
    const { children } = this.props

    return (
      <div className="modalTemplate">
        <Button color="secondary" onClick={this.close} > Close</Button>
        <div className="contentContainer">
          {children}
        </div>
      </div>
    )
  }
}

