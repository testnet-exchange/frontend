import React from 'react'
import './Group.css'

import Input from "../../forms/input/Input"
import { Select } from 'valuelink/tags'


const Group = ({ linkInput, linkSelect }) => (
  <div className="row">
    <Input valueLink={linkInput} pattern="0-9\." />
    <Select valueLink={linkSelect} className="select" pattern="0-9\." >
      <option value="ETH">ETH</option>
      <option value="BTC">BTC</option>
    </Select>
  </div>
)

export default Group
