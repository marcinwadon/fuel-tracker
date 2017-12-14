import React, { ReactNode } from 'react'
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {
  NavigationAction,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import { INavigationProps } from '@fuel-lib/navigation'

interface IProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export class Dashboard extends React.Component<IProps & INavigationProps> {
  public static readonly navigationOptions: () => NavigationScreenOptions = () => ({
    title: 'Dashboard',
  })

  public readonly navigate: () => void = () => {
    this.props.navigation.navigate('Second')
  }

  public render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <TouchableHighlight onPress={this.navigate} underlayColor='#ddd'><Text>click me</Text></TouchableHighlight>
      </View>
    )
  }
}
