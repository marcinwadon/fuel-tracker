import { Map } from 'immutable'

import { initialState as navigationInitialState } from '../navigation'
import { IAppState } from './state'

export const initialState: IAppState = {
  navigation: navigationInitialState,
  vehicle: Map(),
}
