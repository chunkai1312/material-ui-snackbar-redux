# material-ui-snackbar-redux

> [DEPRECATED] Snackbar component using Material-UI v1 with Redux integration

## Deprecation Notice

This package has been deprecated. Please use [notistack](https://www.npmjs.com/package/notistack) instead.

## Install

```
$ npm install material-ui-snackbar-redux --save
```

## Setup

### Add the Reducer to Redux store

The first step is to add the reducer to your rootReducer when creating Redux's store.

```js
import { combineReducers } from 'redux'
import { snackbarReducer } from 'material-ui-snackbar-redux'

const rootReducer = combineReducers({
  // other reducers...
  snackbar: snackbarReducer
})

export default rootReducer
```

### Add the SnackbarProvider component to the tree

The second step is to add the `SnackbarProvider` component somewhere in your app.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'material-ui-snackbar-redux'
import App from './App' // your entry page
import reducer from './reducers' // root reduer

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 3500 }}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root')
)
```

#### SnackbarProvider Props

|Name            |Type        |Default     |Description
|----------------|------------|------------|--------------------------------
|children|`node`||The children that are wrapped by this provider.
|SnackbarProps|`object`||Properties applied to the `Snackbar` element.

## Usage

### Use withSnackbar HOC

You can display snackbar messages with the `withSnackbar` HOC and the injected `snackbar` prop in your components.

```js
import React from 'react'
import { withSnackbar } from 'material-ui-snackbar-redux'
import Button from '@material-ui/core/Button'

class MyComponent extends React.Component {
  handleClick () {
    const { snackbar } = this.props
    snackbar.show('Archived', 'Undo', () => {/* do something... */})
  }

  render () {
    <div>
      <Button className={classes.button} onClick={this.handleClick}>
        Open snackbar
      </Button>
    </div>
  }
}

export default withSnackbar()(MyComponent)
```

#### API

**`snackbar.show(message, [action, handler])`**

* `message` (string) – message to display
* `action` (string, _optional_) – label for the action button
* `handler` (function, _optional_) – click handler for the action button

### Dispatch actions

You may use some libraries to handle asynchronous actions or side effects, like [redux-thunk](https://github.com/reduxjs/redux-thunk), [redux-saga](https://github.com/redux-saga/redux-saga) and [redux-observable](https://github.com/redux-observable/redux-observable). In this context, you can use `snackbarActions` action creator to dispath actions that show snackbars.


```js
import { snackbarActions as snackbar } from 'material-ui-snackbar-redux'

dispatch(snackbar.show({
  message: 'Archived',
  action: 'Undo',
  handleAction: () => {/* do something... */} 
}))
```

## References

* [Snackbars - Material Design](https://material.io/design/components/snackbars.html)
* [Snackbar API - Material-UI](https://material-ui.com/api/snackbar/)

## License

[MIT](LICENSE)
