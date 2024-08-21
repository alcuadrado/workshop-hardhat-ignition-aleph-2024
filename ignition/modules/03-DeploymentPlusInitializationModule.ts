import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("DeploymentPlusInitialization", (m) => {
  const helloWorld = m.contract("HelloWorldWithInitialize");

  m.call(helloWorld, "initialize", ["Hello, world!"]);

  return {
    helloWorld,
  };
});
