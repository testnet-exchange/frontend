import React, { Component } from 'react'
import './Deposit.css'

import { connect } from 'redaction'

import actions from '../../../redux/actions'

import Modal from '../../modal/Modal/Modal'
import Table from '../../Table/Table'

import Row from './Row/Row'

class Deposit extends Component  {

  componentWillMount() {
    actions.user.fetchAddress()
  }

  render () {
    const { name, ethAddress, btcAddress } = this.props

    const titles = [
      'Currency',
      'Address'
    ]

    const list = [
      {
        name: 'ETH',
        address: ethAddress,
      },
      {
        name: 'BTC',
        address: btcAddress,
      },
    ]

    return (
      <Modal name={name} >
        <div className="modalAddress">
          <Table
            titles={titles} rows={list}
            rowRender={(row, index) => <Row row={row} key={index} />}
            />
        </div>
      </Modal>
    )
  }
}

export default connect({
  ethAddress: 'user.address.eth',
  btcAddress: 'user.address.btc',
})(Deposit)
