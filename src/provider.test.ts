import chai from "chai"
import { Provider } from "./provider"

const expect: Chai.ExpectStatic = chai.expect

describe("Provider Use Cases", () => {
    it("Should be able to bind and call binded class", () => {
        const provider = new Provider()

        provider.bind("Sample", () => {
            return "sample"
        })

        expect(provider.make("Sample")).to.equal("sample")
    })

    it("Should provide same instance for singleton", () => {
        const provider = new Provider()

        provider.singleton("Sample", () => {
            return Math.random()
        })

        provider.bind("Sample2", () => {
            return Math.random()
        })

        const testEqual1 = provider.make("Sample")
        const testEqual2 = provider.make("Sample")

        const testNotEqual1 = provider.make("Sample2")
        const testNotEqual2 = provider.make("Sample2")

        expect(testEqual2).to.equal(testEqual1)
        expect(testNotEqual2).to.not.equal(testNotEqual1)
    })
})
