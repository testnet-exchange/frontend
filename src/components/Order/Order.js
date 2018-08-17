import React, { Component } from 'react'
import actions from '../../redux/actions'

import './Order.css'

import Link from 'valuelink'
import Group from './Group/Group'
import { Button } from '../controls'


class Order extends Component {

  state = {
    active: 'buy',
    sellAmount: '',
    buyAmount: '',
    sellCurrency: 'ETH',
    buyCurrency: 'BTC',
  }

  handleCreateOrder = () => {
    const { buyAmount, sellAmount, active } = this.state

    const base_amount       = parseFloat(buyAmount) // active === 'sell' ? parseFloat(buyAmount) : parseFloat(sellAmount)
    const secondary_amount  = parseFloat(sellAmount) //active === 'sell' ? parseFloat(sellAmount) : parseFloat(buyAmount)

    if (!secondary_amount || !base_amount) return

    const price = base_amount/secondary_amount

    const params = {
      market: 'TESTNET3RINKEBY',
      side: active === 'sell' ? 2 : 1,
      amount: String(base_amount),
      price: String(price),
      taker_fee_rate: '',
      maker_fee_rate: '',
      source: ''
    }

    actions.orders.createOrder(params)
  }

  handleSellActive = () => {
    this.setState({
      active: 'sell',
    })
  }

  handleBuyActive = () => {
    this.setState({
      active: 'buy',
    })
  }


  handleSellAmountChange = (value) => {
    this.setState({
      sellAmount: value ,
    })
  }

  handleBuyAmountChange = (value) => {
    this.setState({
      buyAmount: value
    })
  }

  handleSellCurrencyChange = (value) => {
    let { sellCurrency, buyCurrency } = this.state

    if (buyCurrency === value) {
      buyCurrency = sellCurrency
    }

    this.setState({
      sellCurrency: value,
      buyCurrency,
    })
  }

  handleBuyCurrencyChange = (value) => {
    let { sellCurrency, buyCurrency } = this.state

    if (sellCurrency === value) {
      sellCurrency = buyCurrency
    }

    this.setState({
      buyCurrency: value,
      sellCurrency,
    })
  }

  render() {
    const { active } = this.state
    const linked = Link.all(this, 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount')

    return (
      <div className="row">
        <div>
          <Button
            style={active === 'buy' ? { background: 'green' } : {} }
            color={active === 'buy' ? 'primary' : 'default'}
            onClick={this.handleBuyActive}
          >
            buy
          </Button>
          <Button
            color={active === 'buy' ? 'default' : 'secondary'}
            onClick={this.handleSellActive}
          >
            sell
          </Button>
        </div>
        <Group
          readOnly={true}
          linkInput={linked.sellAmount.onChange(this.handleSellAmountChange)}
          linkSelect={linked.sellCurrency.onChange(this.handleSellCurrencyChange)}
        />
        <Group
          readOnly={true}
          linkInput={linked.buyAmount.onChange(this.handleBuyAmountChange)}
          linkSelect={linked.buyCurrency.onChange(this.handleBuyCurrencyChange)}
        />
      <Button color="secondary" onClick={this.handleCreateOrder}>Create order</Button>
      </div>
    )
  }
}

export default Order
