import React, { Component } from 'react'
import { connect } from 'redaction'

import Order from '../../components/Order/Order'

import NewUser from './NewUser/NewUser'
import Registered from './Registered/Registered'


const titles = ['Cm. Vol', 'Cm. Cost', 'Cost', 'Volume', 'Price']

const rows = [
  { cmvol: '0.123', cmcost: '1.124',  cost: '12',  volume: '12344', price: '100' },
  { cmvol: '0.12',  cmcost: '2.123',  cost: '12',  volume: '12344', price: '100' },
  { cmvol: '0.23',  cmcost: '1.1123', cost: '12',  volume: '12344', price: '100' },
  { cmvol: '0.3',   cmcost: '1.13',   cost: '12',  volume: '12344', price: '100' },
]

class Home extends Component {


  render() {
    const { name } = this.props

    return (
      <section>
        <h1>Home</h1>
        <Order />
        {
          name === undefined ? (
            <NewUser />
          ) : (
            <Registered />
          )
        }
      </section>
    )
  }
}

export default connect ({
 name: 'user.name'
})(Home)