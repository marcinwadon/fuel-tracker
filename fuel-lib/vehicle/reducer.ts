import { Map } from 'immutable'
import { AnyAction } from 'redux'

import { VehicleActionType } from './action'
import { IVehicle, VehicleID } from './vehicle'

export const vehicleReducer = (state: Map<VehicleID, IVehicle> = Map([]), action: AnyAction) => {
  if (action.type === VehicleActionType.ADD) {
    const { id, vehicle } = action.payload

    return state.set(id, vehicle)
  }

  return state
}
