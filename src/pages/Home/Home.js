import React from 'react'

import Order from '../../components/Order/Order'
import Table from '../../components/Table/Table'

import Row from './Row/Row'


const titles = ['Cm. Vol', 'Cm. Cost', 'Cost', 'Volume', 'Price']

const rows = [
  { cmvol: '0.123', cmcost: '1.124',  cost: '12',  volume: '12344', price: '100' },
  { cmvol: '0.12',  cmcost: '2.123',  cost: '12',  volume: '12344', price: '100' },
  { cmvol: '0.23',  cmcost: '1.1123', cost: '12',  volume: '12344', price: '100' },
  { cmvol: '0.3',   cmcost: '1.13',   cost: '12',  volume: '12344', price: '100' },
]

const Home = () => (
  <section>
    <h1>Home</h1>
    <Order />
    <h2>Buy</h2>
    <Table
      titles={titles}
      rows={rows}
      rowRender={(row, index) => (
        <Row
          key={index}
          row={row}
        />
      )}
    />

    <h2>Sell</h2>
    <Table
      titles={titles}
      rows={rows}
      rowRender={(row, index) => (
        <Row
          key={index}
          row={row}
        />
      )}
    />
  </section>
)

export default Home
