import { Registries } from "./contracts/registries"
import { Provider } from "./provider"

export class Registry {
    constructor(private provider: Provider) {}

    public register(collections: Registries[]): void {
        collections.forEach((data: Registries) => {
            if (data.singleton) {
                this.provider.singleton(data.name, data.factory)
                return
            }

            this.provider.bind(data.name, data.factory)
            return
        })
    }
}
