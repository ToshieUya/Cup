import chai from "chai"
import { Provider } from "./provider"
import { Registry } from "./registry"

const expect: Chai.ExpectStatic = chai.expect

describe("Registry Use Cases", () => {
    it("Should be able to bind all in registry into provider", () => {
        const provider = new Provider()
        const registry = new Registry(provider)

        registry.register([
            {
                name: "Sample",
                factory: () => {
                    return "sample"
                },
                singleton: false,
            },
            {
                name: "Sample2",
                factory: () => {
                    return Math.random()
                },
                singleton: true,
            },
        ])
        const singleton1 = provider.make("Sample2")
        const singleton2 = provider.make("Sample2")
        // Check if registers implementation is correct
        expect(provider.make("Sample")).to.equal("sample")
        // Check if singleton registers is equal on different initialization
        expect(singleton1).to.equal(singleton2)
    })
})
