import { StackNavigator } from 'react-navigation'

import { Second } from '../../fuel-app/second'
import { Dashboard } from './../../fuel-app/dashboard'

export const AppNavigator = StackNavigator({
  Dashboard: { screen: Dashboard },
  Second: { screen: Second },
})
