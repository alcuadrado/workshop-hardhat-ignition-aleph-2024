import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("BasicExample", (m) => {
  const basicExample1 = m.contract("BasicExample1", ["Hola"]);

  // const basicExample2 = m.contract("BasicExample2", [0]);

  return { basicExample1 };
});
