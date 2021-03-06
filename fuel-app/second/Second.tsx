import React, { ReactNode } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import {
  NavigationAction,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
})

export class Second extends React.Component<{}> {
  public static readonly navigationOptions: () => NavigationScreenOptions = () => ({
    title: 'Second',
  })

  public render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text>Second</Text>
      </View>
    )
  }
}
