import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import Button from '@material-ui/core/Button'
import actions from './actions'

class SnackbarProvider extends PureComponent {
  getChildContext () {
    return {
      snackbar: {
        show: this.props.show
      }
    }
  }

  handleActionClick = () => {
    this.handleClose()
    this.props.snackbar.handleAction()
  }

  handleClose = () => {
    this.props.dismiss()
  }

  render () {
    const { children, SnackbarProps = {}, snackbar } = this.props
    const { action, message, open } = snackbar

    return (
      <React.Fragment>
        {children}
        <Snackbar
          {...SnackbarProps}
          open={open}
          message={message || ''}
          action={action && (
            <Button
              color='secondary'
              size='small'
              onClick={this.handleActionClick}
            >
              {action}
            </Button>
          )}
          onClose={this.handleClose}
        />
      </React.Fragment>
    )
  }
}

SnackbarProvider.childContextTypes = {
  snackbar: PropTypes.object
}

SnackbarProvider.propTypes = {
  children: PropTypes.node,
  SnackbarProps: PropTypes.object
}

export default connect(
  state => ({
    snackbar: state.snackbar
  }),
  dispatch => ({
    show: (message, action, handleAction) => dispatch(actions.show({ message, action, handleAction })),
    dismiss: () => dispatch(actions.dismiss())
  })
)(SnackbarProvider)
