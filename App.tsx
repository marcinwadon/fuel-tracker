import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { AppWithNavigationState } from '@fuel-app/App'
import { store } from '@fuel-lib/store'

export default class App extends React.Component {
  public render(): ReactNode {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}
