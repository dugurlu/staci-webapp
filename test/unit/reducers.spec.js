import uiState, { defaultUiState } from '../../client/reducers/uiState'
import * as types from '../../client/constants/ActionTypes'

describe('ui state reducer', () => {
  it('should return the initial state', () => {
    expect(uiState(undefined, {})).toEqual(defaultUiState)
  })

  // Test DRAWER
  it('should handle toggle drawer', () => {
    const stateBefore = {
      ...defaultUiState,
      drawerOpen: false
    }

    const stateAfter = {
      ...stateBefore,
      drawerOpen: true
    }
    expect(uiState(stateBefore, {
      type: types.TOGGLE_DRAWER
    })).toEqual(stateAfter)
  })

  it('should handle close drawer', () => {
    const stateBeforeOpen = {
      ...defaultUiState,
      drawerOpen: true
    }

    const stateBeforeClosed = {
      ...defaultUiState,
      drawerOpen: false
    }

    const stateAfter = {
      ...defaultUiState,
      drawerOpen: false
    }

    expect(uiState(stateBeforeOpen, {
      type: types.CLOSE_DRAWER
    })).toEqual(stateAfter)

    expect(uiState(stateBeforeClosed, {
      type: types.CLOSE_DRAWER
    })).toEqual(stateAfter)
  })

  // Test ASSESSMENT progression
  it('should handle assessment\'s next step', () => {
    const stateBefore = {
      ...defaultUiState,
      currentStep: 0
    }

    const stateAfter = {
      ...defaultUiState,
      currentStep: 1
    }

    expect(uiState(stateBefore, {
      type: types.ASSESSMENT_NEXT_STEP
    })).toEqual(stateAfter)
  })

  it('should not increase current step over available steps', () => {
    const stateBefore = {
      ...defaultUiState,
      currentStep: defaultUiState.steps.length - 1
    }

    expect(uiState(stateBefore, {
      type: types.ASSESSMENT_NEXT_STEP
    })).toEqual(stateBefore)
  })

  it('should handle assessment\'s previous step', () => {
    const stateBefore = {
      ...defaultUiState,
      currentStep: 1
    }

    const stateAfter = {
      ...defaultUiState,
      currentStep: 0
    }

    expect(uiState(stateBefore, {
      type: types.ASSESSMENT_PREV_STEP
    })).toEqual(stateAfter)
  })

  it('should not decrese current step below 0', () => {
    const stateBefore = {
      ...defaultUiState,
      currentStep: 0
    }

    expect(uiState(stateBefore, {
      type: types.ASSESSMENT_PREV_STEP
    })).toEqual(stateBefore)
  })

  it('should always reset current step to 0', () => {
    const stateZero = {
      ...defaultUiState,
      currentStep: 0
    }

    const stateMax = {
      ...defaultUiState,
      currentStep: defaultUiState.steps.length - 1
    }

    expect(uiState(stateZero, {
      type: types.ASSESSMENT_RESET
    })).toEqual(stateZero)

    expect(uiState(stateMax, {
      type: types.ASSESSMENT_RESET
    })).toEqual(stateZero)
  })
})
