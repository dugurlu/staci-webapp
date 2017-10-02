import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions/actionCreators'
import { getAssessments, getErrorMessage, getIsFetching } from '../reducers/index'
import AssessmentList from './AssessmentList'
import FetchError from './FetchError'
import SimpleCard from './SimpleCard'

const mapStateToProps = (state, { match }) => {
  const filter = match.params.id || ''
  return {
    assessments: getAssessments(state, filter),
    isFetching: getIsFetching(state),
    errorMessage: getErrorMessage(state),
    filter
  }
}

class LoadAssessment extends React.Component {
  constructor (props) {
    super(props)

    this.fetchData = this.fetchData.bind(this)
  }
  componentDidMount () {
    this.fetchData()
  }

  componentDidUpdate (prevProps) {
    // udpate if the match / assessment id changes
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData () {
    const { filter, fetchAssessments } = this.props
    fetchAssessments(filter).then(() => {
      // TODO
    })
  }

  render () {
    const { assessments, errorMessage, isFetching } = this.props
    if (isFetching && !assessments.length) {
      return (
        <SimpleCard
          title='Available assessments'
          subtitle='Fetching available assessments'
          message='Loading...'
        />
      )
    }

    if (errorMessage && !assessments.length) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={this.fetchData}
        />
      )
    }
    return (
      <AssessmentList assessments={assessments} />
    )
  }
}

export default connect(
  mapStateToProps,
  actions
)(LoadAssessment)

LoadAssessment.propTypes = {
  match: PropTypes.object,
  fetchAssessments: PropTypes.func,
  filter: PropTypes.string,
  assessments: PropTypes.array,
  isFetching: PropTypes.bool,
  errorMessage: PropTypes.string
}
