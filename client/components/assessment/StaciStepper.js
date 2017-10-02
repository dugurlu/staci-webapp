import React from 'react'
import PropTypes from 'prop-types'

import { Stepper, Step, StepLabel } from 'material-ui/Stepper'

export default class StaciStepper extends React.Component {
  generateStepsJsx = (steps) => {
    return steps.map((el, index) => {
      return <Step key={el.id}><StepLabel>{el.title}</StepLabel></Step>
    })
  }

  render () {
    return (
      <Stepper orientation={this.props.orientation} activeStep={this.props.activeStep}>
        {this.generateStepsJsx(this.props.steps)}
      </Stepper>
    )
  }
}

StaciStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  orientation: PropTypes.string.isRequired,
  activeStep: PropTypes.number.isRequired
}
