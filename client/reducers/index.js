import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { responsiveStateReducer } from 'redux-responsive'

import assessments, * as fromAssessments from './assessments'
import uiState, { defaultUiState } from './uiState'

const rootReducer = combineReducers({
  assessments,
  uiState,
  routing: routerReducer,
  browser: responsiveStateReducer
})

export const initialState = {
  assessments: {},
  uiState: defaultUiState
}

export const getAssessments = (state, filter) => {
  return fromAssessments.getAssessments(state.assessments, filter)
}

export const getIsFetching = (state) => {
  return fromAssessments.getIsFetching(state.assessments)
}

export const getErrorMessage = (state) => {
  return fromAssessments.getErrorMessage(state.assessments)
}

export default rootReducer
