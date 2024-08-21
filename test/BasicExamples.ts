import { ignition } from "hardhat";

import { expect } from "chai";

import BasicExampleModule from "../ignition/modules/01-BasicExampleModule";

describe("BasicExamples tests with Hardhat Ignition", () => {
  it.skip("Should deploy the contracts correctly", async () => {
    const { basicExample1, basicExample2 } = await ignition.deploy(
      BasicExampleModule
    );

    expect(await basicExample1.param()).to.equal("Hola");
    expect(await basicExample2.param()).to.equal(1);
  });
});
