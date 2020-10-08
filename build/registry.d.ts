import { Registries } from "./contracts/registries";
import { Provider } from "./provider";
export declare class Registry {
    private provider;
    constructor(provider: Provider);
    register(collections: Registries[]): void;
}
