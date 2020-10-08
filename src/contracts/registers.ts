import { Provider } from "../provider"

export enum ServiceType {
    bind,
    singleton,
}

export interface Registers {
  factory: (provider: Provider) => any
  type: ServiceType
}
