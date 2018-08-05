import React, { Component } from 'react'
import './ModalConductor.css'

import { connect } from 'redaction'

import Modals from '../../Modals'


class ModalConductor extends Component {
  render() {
    const { modals } = this.props

    const modalNames = Object.keys(modals)
    const areModalsExist = Boolean(modalNames.length)

    return areModalsExist && (
      <div className="modalConductor">
        {
          modalNames.map((key) => {
            const { name, data = {} } = modals[key]

            return React.createElement(Modals[name], {
              key: name,
              name,
              data,
            })
          })
        }
      </div>
    )
  }
}

export default connect({
  modals: 'modals',
})(ModalConductor)
