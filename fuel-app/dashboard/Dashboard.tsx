import React, { ReactNode } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {
  NavigationAction,
  NavigationScreenOptions,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'
import { connect, MapDispatchToProps } from 'react-redux'

import { INavigationProps } from '@fuel-lib/navigation'
import { addVehicleAction, IRecord, IVehicle, VehicleID } from '@fuel-lib/vehicle'

interface IProps {
  readonly addVehicle: (vehicle: IVehicle) => void
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ddd',
  },
  buttonText: {
    fontSize: 30,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    width: 60,
  },
})

interface IState {
  readonly text: string
}

class DashboardComponent extends React.Component<IProps & INavigationProps, IState> {
  public static readonly navigationOptions: () => NavigationScreenOptions = () => ({
    title: 'Dashboard',
  })

  public readonly state: IState = {
    text: '',
  }

  public readonly navigate: () => void = () => {
    this.props.navigation.navigate('Second')
  }

  public readonly addVehicle: () => void = () => {
    this.props.addVehicle({
      name: this.state.text,
    })
  }

  public readonly onChangeText = (text: string) => {
    this.setState({ text })
  }

  public render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text>Dashboard</Text>
        <TouchableOpacity onPress={this.navigate}><Text>click me</Text></TouchableOpacity>
        <TextInput style={styles.input} onChangeText={this.onChangeText} value={this.state.text} />
        <TouchableOpacity onPress={this.addVehicle}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>add vehicle</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps: MapDispatchToProps<IProps, null> = dispatch => ({
  addVehicle: (vehicle: IVehicle) => dispatch(addVehicleAction(vehicle)),
})

export const Dashboard = connect(null, mapDispatchToProps)(DashboardComponent)
