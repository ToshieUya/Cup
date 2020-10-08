"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = void 0;
const contracts_1 = require("./contracts");
class Provider {
    constructor() {
        // Collection of services
        this.registry = {};
    }
    // Bind interface to implementation
    bind(namespace, factory) {
        this.registry[namespace] = { factory, type: contracts_1.ServiceType.bind };
    }
    // Set a singleton instance of an implementation of an interface
    singleton(namespace, factory) {
        this.registry[namespace] = {
            factory: factory(this),
            type: contracts_1.ServiceType.singleton,
        };
    }
    // Fetch resolved interface implementation
    make(namespace) {
        switch (this.registry[namespace].type) {
            case contracts_1.ServiceType.singleton:
                return this.registry[namespace].factory;
            default:
                return this.registry[namespace].factory(this);
        }
    }
}
exports.Provider = Provider;
