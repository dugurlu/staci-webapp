import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_ASSESSMENTS_SUCCESS: {
      const nextState = { ...state }
      action.response.forEach((assessment) => {
        nextState[assessment.id] = assessment
      })
      return nextState
    }
    case types.ADD_ASSESSMENT_SUCCESS: {
      return {
        ...state,
        [action.response.id]: action.response
      }
    }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_ASSESSMENTS_SUCCESS:
      return action.response.map((assessment) => {
        return assessment.id
      })
    case types.ADD_ASSESSMENT_SUCCESS:
      return [...state, action.response.id]
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_ASSESSMENTS_REQUEST:
      return true
    case types.FETCH_ASSESSMENTS_FAILURE:
    case types.FETCH_ASSESSMENTS_SUCCESS:
      return false
    default:
      return state
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_ASSESSMENTS_FAILURE:
      return action.message
    case types.FETCH_ASSESSMENTS_REQUEST:
    case types.FETCH_ASSESSMENTS_SUCCESS:
      return null
    default:
      return state
  }
}

const assessments = combineReducers({
  byId,
  allIds,
  isFetching,
  errorMessage
})

const getAllAssessments = (state) => {
  return state.allIds.map((id) => state.byId[id])
}

export default assessments

export const getAssessments = (state, filter) => {
  const allAssessments = getAllAssessments(state)
  if (filter) {
    return allAssessments.filter((a) => a.id.includes(filter))
  }
  return allAssessments
}

export const getIsFetching = (state) => {
  return state.isFetching
}

export const getErrorMessage = (state) => {
  return state.errorMessage
}
