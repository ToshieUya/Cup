# CUP
Yet another Typescript simple and basic IoC Contatiner for your small application.

## Objective
The reason for this IoC Container is to provide a simple way to use
handle inversion of control dependencies injection.
Other IoC container out there make use of decorators in classes which
have to be imported, this creates an extra dependency for the class.
Having to use the decorator in classes creates constraint to the class.
This library provide IoC capability without having to import it in
classes which makes the class clean.

## Usage Guide
Initiate Provider
```
const provider = new Provider()
```
Initiate the Registry with the provider
```
const registry = new Registry(provider)
```
Define and register interfaces and it's implementation in the registries
```
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
        factory: (Provider: provider) => {
            const sample: string = provider.make("Sample")
            return sample + "2"
        },
        singleton: false,
    },
])
```
Now you can initialize Sample2 which the Registry will provide the dependency of Sample as per defined in the the Registries.
```
provider.make("Sample2") // Should return sample2 string
```
You may find the usage detail in the test cases.