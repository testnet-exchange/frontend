import React from 'react'
import './Group.css'

import Input from "../../forms/input/Input"
import { Select } from 'valuelink/tags'


const Group = ({ linkInput, linkSelect, readOnly = false }) => (
  <div className="row">
    <Input valueLink={linkInput} readOnly={readOnly} />
    <Select valueLink={linkSelect} disabled={readOnly} className="select" >
      <option value="ETH">ETH</option>
      <option value="BTC">BTC</option>
    </Select>
  </div>
)

export default Group
