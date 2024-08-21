import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Factory", (m) => {
  const wrappedHelloWorld = m.contract("WrappedHelloWorld", [helloWorld]);

  return { helloWorld: wrappedHelloWorld };
});
