import { Provider } from "../provider"

export interface Registries {
  name: string
  factory: (provider: Provider) => unknown
  singleton: boolean
}
