import { Provider } from "../provider";
export declare enum ServiceType {
    bind = 0,
    singleton = 1
}
export interface Registers {
    factory: (provider: Provider) => any;
    type: ServiceType;
}
