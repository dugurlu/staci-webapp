// import { normalize } from 'normalizr'
// import * as schema from './schema'
import * as types from '../constants/ActionTypes'
import { getIsFetching } from '../reducers/index'
import * as api from '../data/api'

/*
 * ASSESSMENTS
 */
export const addAssessment = (customer, assessor) => (dispatch) => {
  api.addAssessment(customer, assessor).then((response) => {
    dispatch({
      type: types.ADD_ASSESSMENT_SUCCESS,
      response
    })
  })
}

export const fetchAssessments = (filter) => (dispatch, getState) => {
  // return early if there is already a request ongoing
  if (getIsFetching(getState())) {
    return Promise.resolve()
  }

  dispatch({
    type: types.FETCH_ASSESSMENTS_REQUEST,
    filter
  })

  return api.fetchAssessments(filter).then(
    (response) => {
      dispatch({
        type: types.FETCH_ASSESSMENTS_SUCCESS,
        filter,
        response
      })
    },
    (error) => {
      dispatch({
        type: types.FETCH_ASSESSMENTS_FAILURE,
        filter,
        message: error.message || 'Something went wrong!'
      })
    }
  )
}

/*
 * UI
 */
export const toggleDrawer = () => {
  return {
    type: types.TOGGLE_DRAWER
  }
}

export const closeDrawer = () => {
  return {
    type: types.CLOSE_DRAWER
  }
}

export const assessmentNextStep = () => {
  return {
    type: types.ASSESSMENT_NEXT_STEP
  }
}

export const assessmentPreviousStep = () => {
  return {
    type: types.ASSESSMENT_PREV_STEP
  }
}

export const assessmentReset = () => {
  return {
    type: types.ASSESSMENT_RESET
  }
}
