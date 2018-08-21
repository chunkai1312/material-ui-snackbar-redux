import React from 'react'
import PropTypes from 'prop-types'

function withSnackbar () {
  return (Component) => {
    const ComponentWithSnackbar = (props, { snackbar }) => (
      <Component
        snackbar={snackbar}
        {...props}
      />
    )

    ComponentWithSnackbar.contextTypes = {
      snackbar: PropTypes.object.isRequired
    }

    return ComponentWithSnackbar
  }
}

export default withSnackbar
