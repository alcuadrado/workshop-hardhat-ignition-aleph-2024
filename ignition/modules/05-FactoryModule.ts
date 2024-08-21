import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Sumodules", (m) => {
  const factory = m.contract("Factory");

  const deploy = m.call(factory, "deploy");

  const address = m.readEventArgument(deploy, "Deployed", "addr");

  const deployedWithFactory = m.contractAt("DeployedWithFactory", address);

  return {
    factory,
    deployedWithFactory,
  };
});
