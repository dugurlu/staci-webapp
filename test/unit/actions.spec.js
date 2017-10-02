import * as actions from '../../client/actions/actionCreators'
import * as types from '../../client/constants/ActionTypes'

describe('actions', () => {
  it('should create an action to create an assessment', () => {
    const expectedAction = {
      type: types.ADD_ASSESSMENT
    }
    expect(actions.createAssessment()).toEqual(expectedAction)
  })

  it('should create an action to advance an assessment', () => {
    const expectedAction = {
      type: types.ASSESSMENT_NEXT_STEP
    }
    expect(actions.assessmentNextStep()).toEqual(expectedAction)
  })

  it('should create an action to go back in an assessment', () => {
    const expectedAction = {
      type: types.ASSESSMENT_PREV_STEP
    }
    expect(actions.assessmentPreviousStep()).toEqual(expectedAction)
  })

  it('should create an action to reset an assessment', () => {
    const expectedAction = {
      type: types.ASSESSMENT_RESET
    }
    expect(actions.assessmentReset()).toEqual(expectedAction)
  })

  it('should create an action to toggle the drawer', () => {
    const expectedAction = {
      type: types.TOGGLE_DRAWER
    }
    expect(actions.toggleDrawer()).toEqual(expectedAction)
  })

  it('should create an action to close the drawer', () => {
    const expectedAction = {
      type: types.CLOSE_DRAWER
    }
    expect(actions.closeDrawer()).toEqual(expectedAction)
  })
})
