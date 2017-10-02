import React from 'react'

import PropTypes from 'prop-types'
import Raven from 'raven-js'

export default class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true})
    Raven.captureException(error, {extra: {info}})
  }

  render () {
    if (this.state.hasError) {
      return <div>Sorry, something went wrong.</div>
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.object
}
