import {
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  ASSESSMENT_NEXT_STEP,
  ASSESSMENT_PREV_STEP,
  ASSESSMENT_RESET
} from '../constants/ActionTypes'

export const defaultUiState = {
  drawerOpen: false,
  currentStep: 0,
  steps: [
    {
      id: 0,
      title: 'Context Definition'
    },
    {
      id: 1,
      title: 'Executive Summary'
    },
    {
      id: 2,
      title: 'Evaluation'
    },
    {
      id: 3,
      title: 'Result'
    }
  ]
}

const uiState = (state = defaultUiState, action) => {
  const currentStep = state.currentStep || 0
  const steps = state.steps ? state.steps.length : 0

  switch (action.type) {
    case TOGGLE_DRAWER: {
      const newState = !state.drawerOpen || false
      return {
        ...state,
        drawerOpen: newState
      }
    }
    case CLOSE_DRAWER: {
      return {
        ...state,
        drawerOpen: false
      }
    }
    case ASSESSMENT_NEXT_STEP: {
      if (steps === 0) {
        return state
      }
      if (currentStep < steps - 1) {
        return {
          ...state,
          currentStep: currentStep + 1
        }
      }
      return state
    }
    case ASSESSMENT_PREV_STEP: {
      if (currentStep > 0) {
        return {
          ...state,
          currentStep: currentStep - 1
        }
      }
      return state
    }
    case ASSESSMENT_RESET : {
      return {
        ...state,
        currentStep: 0
      }
    }
    default: {
      return state
    }
  }
}

export default uiState
