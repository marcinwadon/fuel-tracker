import { NavigationState } from 'react-navigation'

import { AppNavigator } from './app-navigator'

export const initialState: NavigationState = AppNavigator.router
  .getStateForAction(AppNavigator.router.getActionForPathAndParams('Dashboard'), undefined)
