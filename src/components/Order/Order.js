import React, { Component } from 'react'
import actions from '../../redux/actions'

import './Order.css'

import Link from 'valuelink'
import Group from './Group/Group'
import { Button } from '../controls'


const rating = {
  ETHBTC: 0.05,
  BTCETH: 17.2
}

class Order extends Component {

  state = {
    active: 'buy',
    sellAmount: '',
    buyAmount: '',
    sellCurrency: 'ETH',
    buyCurrency: 'BTC',
  }

  componentWillMount() {
    const { sellCurrency, buyCurrency } = this.state
    this.handleSetRate(sellCurrency, buyCurrency)
  }

  handleCreateOrder = () => {
    const { buyAmount, sellAmount, active } = this.state

    const buy   = parseFloat(buyAmount)
    const sell  = parseFloat(sellAmount)

    if (!buy || !sell) return

    const price   = active === 'sell' ? sell/buy  : buy/sell
    const amount  = active === 'sell' ? sell : buy

    // ASK 0.9 ETH -> 0.05 BTC  p = 0.05/0.9 > 0.5
    // BID 1 ETH <- 0.04 BTC    p = 0.04     < 0.5

    const params = {
      market: 'TESTNET3RINKEBY',
      side: active === 'sell' ? 1 : 2,
      amount: String(amount),
      price: String(price),
      taker_fee_rate: '1',
      maker_fee_rate: '1',
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

  handleSetRate = (sellCurrency, buyCurrency) => {
    let { buyAmount, sellAmount } = this.state

    const exchangeRate = rating[`${sellCurrency}${buyCurrency}`]

    buyAmount  = (sellAmount || 0) * exchangeRate
    sellAmount = (buyAmount || 0) / exchangeRate

    this.setState({
      exchangeRate,
      buyAmount,
      sellAmount,
    })
  }

  handleSellAmountChange = (value) => {
    const { exchangeRate } = this.state

    this.setState({
      buyAmount: value * exchangeRate,
    })
  }

  handleBuyAmountChange = (value) => {
    const { exchangeRate } = this.state

    this.setState({
      sellAmount: value / exchangeRate
    })
  }

  handleSellCurrencyChange = (value) => {
    let { sellCurrency, buyCurrency } = this.state

    if (buyCurrency === value) {
      buyCurrency = sellCurrency
    }

    this.handleSetRate(value, buyCurrency)

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

    this.handleSetRate(sellCurrency, value)

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
          linkInput={linked.sellAmount.onChange(this.handleSellAmountChange)}
          linkSelect={linked.sellCurrency.onChange(this.handleSellCurrencyChange)}
        />
        <Group
          linkInput={linked.buyAmount.onChange(this.handleBuyAmountChange)}
          linkSelect={linked.buyCurrency.onChange(this.handleBuyCurrencyChange)}
        />
      <Button color="secondary" onClick={this.handleCreateOrder}>Create order</Button>
      </div>
    )
  }
}

export default Order
