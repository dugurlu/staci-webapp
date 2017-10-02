import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { Provider } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import ToolBar from './ToolBar'
import MyDrawer from './MyDrawer'
import View from './View'
import ErrorBoundary from './ErrorBoundary'

const AppShell = () => (
  <div className='app-wrapper'>
    <ToolBar />
    <MyDrawer />
    <View />
  </div>
)

export const Root = (props) => {
  const {store, history} = props
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ErrorBoundary>
            <Switch>
              <Route path='/' render={AppShell} />
            </Switch>
          </ErrorBoundary>
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>
  )
}

export default Root

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
