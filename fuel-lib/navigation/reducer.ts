import { Action } from 'redux'

import { AppNavigator } from './app-navigator'

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Dashboard'), undefined)

export const navigationReducer = (state = initialState, action: Action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}
