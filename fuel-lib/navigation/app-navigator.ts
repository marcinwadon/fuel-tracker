import { StackNavigator } from 'react-navigation'

import { Dashboard } from '@fuel-app/dashboard'
import { Second } from '@fuel-app/second'

export const AppNavigator = StackNavigator({
  Dashboard: { screen: Dashboard },
  Second: { screen: Second },
})
