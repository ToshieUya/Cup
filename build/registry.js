"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    constructor(provider) {
        this.provider = provider;
    }
    register(collections) {
        collections.forEach((data) => {
            if (data.singleton) {
                this.provider.singleton(data.name, data.factory);
                return;
            }
            this.provider.bind(data.name, data.factory);
            return;
        });
    }
}
exports.Registry = Registry;
