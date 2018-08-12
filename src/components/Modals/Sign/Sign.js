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
          <span style={{ fontSize: '14px' }}>Enter your email</span>
          <Input valueLink={linked.name} className="inputSign" placeholder="google@gmail.com" />
          <span style={{ fontSize: '14px' }}>Enter your password</span>
          <Input valueLink={linked.password} className="inputSign" placeholder="password" />
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5px' }}>
            <Button onClick={this.handleSignIn}>Sign in</Button>
            <Button  color="primary" onClick={this.handleSignUp}>Sign up</Button>
          </div>
        </div>
      </Modal>
    )
  }
}
