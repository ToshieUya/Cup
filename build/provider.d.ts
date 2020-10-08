export declare class Provider {
    private registry;
    bind(namespace: string, factory: (provider: Provider) => any): void;
    singleton(namespace: string, factory: (provider: Provider) => any): void;
    make(namespace: string): any;
}
