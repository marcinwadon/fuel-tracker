import { NavigationState } from 'react-navigation'
import { Action } from 'redux'

import { AppNavigator } from './app-navigator'

export const navigationReducer = (state: NavigationState, action: Action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  return nextState || state
}
