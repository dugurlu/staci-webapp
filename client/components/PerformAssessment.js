import React from 'react'

import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import AvReplay from 'material-ui/svg-icons/av/replay'

import StaciStepper from './assessment/StaciStepper'
import StepContent from './assessment/StepContent'

// TODO: disable back button if on first step

const mapStateToProps = ({assessments, uiState, browser}) => {
  return {
    assessments,
    uiState,
    browser
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export class PerformAssessment extends React.Component {
  renderReset = (step, steps, reset) => {
    return step >= steps - 1
      ? <FlatButton
        icon={<AvReplay />}
        onClick={reset}
        label='Reset'
        labelPosition='after'
        secondary={true}
      />
      : null
  }

  render () {
    // set stepper orientation based on browser width
    const {browser} = this.props
    let orientation = 'horizontal'
    if (browser.lessThan.medium) {
      orientation = 'vertical'
    }

    // get information related to steps
    const step = this.props.uiState.currentStep || 0
    const numSteps = this.props.uiState.steps.length
    const stepTitle = this.props.uiState.steps[step].title || 'Title'

    const nextLabel = step >= numSteps - 1 ? 'Finish' : 'Next'
    const reset = this.props.assessmentReset

    return (
      <div>
        <Card initiallyExpanded>
          <CardHeader
            title='StaCI Assessment Progress'
            subtitle={stepTitle}
            actAsExpander
            showExpandableButton
          />
          <CardText expandable>
            <StaciStepper
              orientation={orientation}
              activeStep={step}
              steps={this.props.uiState.steps}
            />
          </CardText>
          <CardActions>
            <FlatButton label='Back'
              disabled={false}
              onClick={this.props.assessmentPreviousStep}
            />
            <RaisedButton label={nextLabel}
              disabled={false}
              primary
              onClick={this.props.assessmentNextStep}
            />
            {this.renderReset(step, numSteps, reset)}
          </CardActions>
        </Card>
        <StepContent step={step} steps={numSteps}/>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PerformAssessment)

PerformAssessment.propTypes = {
  assessmentPreviousStep: PropTypes.func.isRequired,
  assessmentNextStep: PropTypes.func.isRequired,
  assessmentReset: PropTypes.func.isRequired,
  uiState: PropTypes.object.isRequired,
  browser: PropTypes.object.isRequired
}
