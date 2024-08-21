import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ContractDependencies", (m) => {
  const helloWorld = m.contract("HelloWorld", ["Hello, world!"]);

  const wrappedHelloWorld = m.contract("WrappedHelloWorld", [helloWorld]);

  const wrappedHelloWorld2 = m.contract("WrappedHelloWorld", [helloWorld], {
    id: "secondWrapper",
  });

  return { helloWorld, wrappedHelloWorld };
});
