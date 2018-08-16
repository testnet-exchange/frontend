import React, { Component } from 'react'
import { connect } from 'redaction'
import actions from '../../redux/actions'

import Order from '../../components/Order/Order'
import WidthContainer from '../../components/layout/WidthContainer/WidthContainer'

import NewUser from './NewUser/NewUser'
import Registered from './Registered/Registered'


class Home extends Component {
  componentWillMount () {
    actions.user.getUser()

    setTimeout(() => actions.balance.fetch(), 1000)
  }

  render() {
    const { name } = this.props

    return (
      <section>
        <WidthContainer>
          <Order />
          {
            name === undefined ? (
              <NewUser />
            ) : (
              <Registered />
            )
          }
        </WidthContainer>
      </section>
    )
  }
}

export default connect ({
 name: 'user.name'
})(Home)
