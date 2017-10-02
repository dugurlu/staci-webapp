// import react and redux stuff
import React from 'react'
import { render } from 'react-dom'

import configureStore, { history } from './store'

// import components
import Root from './components/Root'

// import raven and sentry configuration
import Raven from 'raven-js'
import { sentryUrl } from './data/config'

// import css
import 'normalize.css'
import './styles/style.scss'

// Setup Raven for error tracking
Raven.config(sentryUrl).install()

const store = configureStore()

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
