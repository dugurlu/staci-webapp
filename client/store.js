import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { responsiveStoreEnhancer } from 'redux-responsive'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

// import the root reducer and initial state
import rootReducer, { initialState } from './reducers/index'

export const history = createHistory()

const configureStore = () => {
  const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose

  // thunk middleware to support actions that are functions
  const middlewares = [thunk]
  // logging middleware
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  // router middleware
  middlewares.push(routerMiddleware(history))

  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares),
    responsiveStoreEnhancer
  )

  const store = createStore(
    rootReducer,
    initialState,
    enhancers
  )

  return store
}

export default configureStore
