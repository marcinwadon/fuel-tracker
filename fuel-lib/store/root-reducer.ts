import { combineReducers, Reducer } from 'redux'

import { navigationReducer } from '../navigation'
import { IAppState } from './state'

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  navigation: navigationReducer,
})
