import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BasicExampleModule = buildModule("BasicExample", (m) => {
  const basicExample1 = m.contract("BasicExample1", ["Hello"]);

  // const basicExample2 = m.contract("BasicExample2", [0]);

  return { basicExample1 };
});

export default BasicExampleModule;
