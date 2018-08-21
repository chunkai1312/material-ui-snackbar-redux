import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'material-ui-snackbar-redux'
import App from './App'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 1000 }}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.querySelector('#root')
)
