import { Map } from 'immutable'
import { NavigationState } from 'react-navigation'
import { IVehicle, VehicleID } from '../vehicle'

export interface IAppState {
  readonly navigation: NavigationState
  readonly vehicle: Map<VehicleID, IVehicle>,
}
