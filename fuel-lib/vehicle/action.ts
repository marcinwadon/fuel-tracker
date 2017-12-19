import { Set } from 'immutable'
import { AnyAction } from 'redux'
import { v4 as uuid } from 'uuid'
import { IVehicle } from './vehicle'

export enum VehicleActionType {
  ADD = 'ADD_VEHICLE',
}

export const addVehicleAction = (vehicle: IVehicle): AnyAction => ({
    payload: {
      id: uuid(),
      vehicle: {
        ...vehicle,
        record: Set(),
      },
    },
    type: VehicleActionType.ADD,
  })
