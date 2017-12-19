import { Set } from 'immutable'

export type VehicleID = string

export interface IVehicle {
  readonly id?: VehicleID
  readonly name: string
  readonly records?: Set<IRecord>
}

export interface IRecord {
  readonly mileage: number,
  readonly price: number,
}
