import { Registers, ServiceType } from "./contracts"
  
export class Provider {
    // Collection of services
    private registry: { [key: string]: Registers } = {}

    // Bind interface to implementation
    public bind(namespace: string, factory: (provider: Provider) => any): void {
        this.registry[namespace] = { factory, type: ServiceType.bind }
    }
  
    // Set a singleton instance of an implementation of an interface
    public singleton(namespace: string, factory: (provider: Provider) => any): void {
        this.registry[namespace] = {
            factory: factory(this), // Initialize implementation for singleton on registration.
            type: ServiceType.singleton,
        }
    }
  
    // Fetch resolved interface implementation
    public make(namespace: string): any {
        switch (this.registry[namespace].type) {
        case ServiceType.singleton:
            return this.registry[namespace].factory
        default:
            return this.registry[namespace].factory(this)
        }
    }
}
