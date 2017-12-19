import { Platform } from 'react-native'
import { applyMiddleware, createStore, Middleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { composeWithDevTools } from 'remote-redux-devtools'

import { initialState } from './initial-state'
import { rootReducer } from './root-reducer'

const enhacer = devToolsEnhancer({
  name: 'Fuel',
})

// const enhacer = composeWithDevTools({
//   name: Platform.OS,
//   hostname: '192.168.2.190',
//   port: 5678,
// })()

export const store = createStore(rootReducer, enhacer)
