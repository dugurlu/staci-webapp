import React from 'react'
import PropTypes from 'prop-types'

import SimpleCard from './SimpleCard'
import FlatButton from 'material-ui/FlatButton'

const FetchError = ({message, onRetry}) => (
  <SimpleCard
    title='Error'
    titleColor='red'
    subtitle='Could not fetch data from API'
    message={message}
    actions={(<FlatButton label='Retry' onClick={onRetry} />)}
  />
)

export default FetchError

FetchError.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func
}
