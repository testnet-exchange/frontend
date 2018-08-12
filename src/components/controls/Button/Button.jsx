import React from 'react'

import cx from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})


const ButtonUI = (props) => {
  const { onClick, children, classes, ...rest } = props

  return (
    <Button variant="contained" {...rest} className={classes.button} onClick={onClick}>{children}</Button>
  )

}


export default withStyles(styles)(ButtonUI)
