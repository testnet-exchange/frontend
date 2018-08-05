import React, { Component } from 'react'
import './Sign.css'

import actions from '../../../redux/actions'

import Link from 'valuelink'

import Modal from '../../modal/Modal/Modal'

import { Input } from '../../forms'
import { Button } from '../../controls'

export default class Sign extends Component  {

  state = {
    name: '',
    password: '',
  }

  handleSignIn = () => {
    const { name, password } = this.state
    actions.user.auth(name, password)
  }

  handleSignUp = () => {
    const { name, password } = this.state
    actions.user.sign(name, password)
  }

  render () {
    const { name } = this.props
    const linked = Link.all(this, 'name', 'password')

    return (
      <Modal name={name} >
        <div className="modalSign">
          <Input valueLink={linked.name} />
          <Input valueLink={linked.password} />
          <Button onClick={this.handleSignIn}>Sign in</Button>
          <Button onClick={this.handleSignUp}>Sign up</Button>
        </div>
      </Modal>
    )
  }
}
