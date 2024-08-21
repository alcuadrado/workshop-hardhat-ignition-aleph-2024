import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

import DeploymentPlusInitialization from "./03-DeploymentPlusInitializationModule";

export default buildModule("Factory", (m) => {
  const { helloWorld } = m.useModule(DeploymentPlusInitialization);

  const wrappedHelloWorld = m.contract("WrappedHelloWorld", [helloWorld]);

  return { helloWorld: wrappedHelloWorld };
});
