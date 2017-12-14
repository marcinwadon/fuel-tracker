import { NavigationAction, NavigationScreenProp, NavigationState } from 'react-navigation'

export interface INavigationProps {
  readonly navigation: NavigationScreenProp<NavigationState, NavigationAction>
}
