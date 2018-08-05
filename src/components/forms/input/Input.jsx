import React, { Component } from 'react'
import './Input.css'

import cx from 'classnames'
import { Input as ValueLinkInput } from 'valuelink/tags'


export default class Input extends Component {
  render () {
    const {
      className, inputContainerClassName, inputClassName,
      valueLink: { error }, valueLink,
      focusOnInit, disabled, readOnly, type
    } = this.props

    const inputContainerStyleName = cx('inputContainer', {
      'withError': error,
    })

    return (
      <div className={`root ${className}`} >
        <div className={`${inputContainerStyleName} ${inputContainerClassName}`}>
          {
            React.createElement(ValueLinkInput, {
              className: 'input ' + inputClassName,
              valueLink,
              type,
              disabled: disabled || readOnly,
              autoFocus: !!focusOnInit,
              dir: 'auto',
              autoComplete: 'off',
            })
          }
        </div>
        {
          Boolean(error) && (
            <div className="error">
              {error}
            </div>
          )
        }
      </div>
    )
  }
}
