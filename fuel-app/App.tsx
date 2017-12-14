import React, { ReactNode } from 'react'
import { addNavigationHelpers, NavigationState } from 'react-navigation'
import { connect, DispatchProp, MapStateToProps } from 'react-redux'

import { AppNavigator } from '../fuel-lib/navigation/app-navigator'
import { IAppState } from '../fuel-lib/store'

interface IProps {
  readonly navigation: NavigationState
}

/* tslint:disable no-any */
class AppComponent extends React.Component<IProps & DispatchProp<{}>> {
  public render(): ReactNode {
    const { dispatch, navigation: state } = this.props

    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch,
        state,
      } as any)} />
    )
  }
}

const mapStateToProps: MapStateToProps<IProps, {}, IAppState> = ({ navigation }) => ({ navigation })

export const AppWithNavigationState = connect(mapStateToProps)(AppComponent)
