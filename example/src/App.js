import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from 'material-ui-snackbar-redux/example/src/withRoot'

import { withSnackbar } from 'material-ui-snackbar-redux'


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
})

class App extends React.Component {
  handleClick = () => {
    const { snackbar } = this.props
    snackbar.show('Archived', 'Undo', () => {/* do something... */})
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display1" gutterBottom>
          Material-UI Snackbar Redux
        </Typography>
        <Typography variant="subheading" gutterBottom>
          Snackbar component using Material-UI v1 with Redux integration
        </Typography>
        <Button variant="contained" color="secondary" onClick={this.handleClick}>
          Open snackbar
        </Button>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withSnackbar()(withStyles(styles)(App)))
