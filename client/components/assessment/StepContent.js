import React from 'react'
import PropTypes from 'prop-types'

import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import { Card, CardHeader, CardText } from 'material-ui/Card'

export default class StepContent extends React.Component {
  render () {
    const { step } = this.props
    switch (step) {
      case 0:
        return (<StepContext {...this.props} />)
      case 1:
        return (<StepExec {...this.props} />)
      default:
        return (<p>Foo!</p>)
    }
  }
}

StepContent.propTypes = {
  step: PropTypes.number,
  steps: PropTypes.number
}

const StepExec = (props) => {
  const { onExecSummaryChange, onApproachChange, onNotesChange } = props
  return (
    <div>
      <Card initiallyExpanded>
        <CardHeader
          title='Assessment Summary'
          subtitle='Executive Summary, Approach, and Notes'
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <div className='row'>
            <div className='col s6'>
              <TextField
                floatingLabelText='Executive Summary'
                onChange={onExecSummaryChange}
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
                defaultValue='The assessment was performed on by <ASSESSOR> (INVENSITY) on <DATE> at <COMPANY> in orgnizational unit <BU>.&#10;The selected process / organization areas were assessed, an overview of the result is depicted in <REF> with detailed evaluation and recommended next steps in <REF>.'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col s6'>
              <TextField
                floatingLabelText='Assessment Approach'
                onChange={onApproachChange}
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
                defaultValue='A maturity rating is provided for every area selected for assessment. The maturity of an area is determined by evaluation of individual requirements (indicators) for that area. For each area the maturity is determined by evaluating all indicators and ...'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col s6'>
              <TextField
                floatingLabelText='Assessment notes'
                onChange={onNotesChange}
                multiLine={true}
                rows={2}
                rowsMax={4}
                fullWidth={true}
                defaultValue='A maturity rating is provided for every area selected for assessment. The maturity of an area is determined by evaluation of individual requirements (indicators) for that area. For each area the maturity is determined by evaluating all indicators and ...'
              />
            </div>
          </div>
        </CardText>
      </Card>
    </div>
  )
}

StepExec.propTypes = {
  onExecSummaryChange: PropTypes.func,
  onApproachChange: PropTypes.func,
  onNotesChange: PropTypes.func
}

const StepContext = (props) => {
  const dateNow = new Date(Date.now())
  const {
    dateTimeFormat,
    locale,
    onAssessmentDateChange,
    onAssessorChange,
    onCustomerChange
  } = props
  // TODO: onChange, DateTimeFormat, locale
  return (
    <div>
      <Card initiallyExpanded>
        <CardHeader
          title='Assessment Metadata'
          subtitle='Customer and Assessors'
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <div className='row'>
            <div className='col s12 l4'>
              <TextField
                floatingLabelText='Assessor'
                hintText='DZUU'
                fullWidth={true}
                onChange={onAssessorChange}
              />
            </div>
            <div className='col s12 l4'>
              <DatePicker
                defaultDate={dateNow}
                container='inline'
                floatingLabelText='Assessment date'
                autoOk={true}
                DateTimeFormat={dateTimeFormat}
                locale={locale}
                onChange={onAssessmentDateChange}
                fullWidth={true}
              />
            </div>
            <div className='col s12 l4'>
              <DatePicker
                floatingLabelText='Last modified on'
                defaultDate={dateNow}
                disabled={true}
                DateTimeFormat={dateTimeFormat}
                locale={locale}
                fullWidth={true}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col s12 l4'>
              <TextField
                floatingLabelText='Customer'
                hintText='e.g. Continental Automotive GmbH - Interior, Body & Security - EEX'
                onChange={onCustomerChange}
                fullWidth={true}
              />
            </div>
          </div>
        </CardText>
      </Card>
      <Card initiallyExpanded>
        <CardHeader
          title='Assessment Metadata'
          subtitle='Assessment Areas'
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <div className='row'>
            <div className='col s12'>
              <Checkbox label='Select/Deselect all' />
            </div>
          </div>
          <div className='row'>
            <div className='col s12 m6'><Checkbox label='Requirements & Change Management'/></div>
            <div className='col s12 m6'><Checkbox label='Architecture & Design'/></div>
            <div className='col s12 m6'><Checkbox label='Configuration & Dependency Management'/></div>
            <div className='col s12 m6'><Checkbox label='Build'/></div>
            <div className='col s12 m6'><Checkbox label='Test & QA'/></div>
            <div className='col s12 m6'><Checkbox label='Culture & Organization'/></div>
            <div className='col s12 m6'><Checkbox label='Release & Process'/></div>
            <div className='col s12 m6'><Checkbox label='Deployment'/></div>
            <div className='col s12 m6'><Checkbox label='Datamangement'/></div>
            <div className='col s12 m6'><Checkbox label='Technology'/></div>
            <div className='col s12 m6'><Checkbox label='Information & Reporting'/></div>
          </div>
        </CardText>
      </Card>
    </div>
  )
}

StepContext.propTypes = {
  dateTimeFormat: PropTypes.string,
  locale: PropTypes.string,
  onAssessmentDateChange: PropTypes.func,
  onAssessorChange: PropTypes.func,
  onCustomerChange: PropTypes.func,
  dateFormatter: PropTypes.object
}
