import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PerformAssessment from './PerformAssessment'
import LoadAssessment from './LoadAssessment'
import Help from './Help'
import NotFound from './NotFound'

export default class View extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/assess' component={PerformAssessment} />
        <Route exact path='/load' component={LoadAssessment} />
        <Route exact path='/load/:id' component={LoadAssessment} />
        <Route exact path='/help' component={Help} />
        {/* TODO: add index/start page */}
        <Route exact path='/' />
        <Route component={NotFound} />
      </Switch>
    )
  }
}
