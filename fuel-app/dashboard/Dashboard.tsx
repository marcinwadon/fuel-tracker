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

interface IProps {
  readonly navigation: NavigationScreenProp<NavigationState, NavigationAction>
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export class Dashboard extends React.Component<IProps> {
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
