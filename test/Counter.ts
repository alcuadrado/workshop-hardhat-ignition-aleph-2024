import { ethers } from "hardhat";
import { expect } from "chai";

describe("Counter", () => {
  describe("Constructor", () => {
    it("Should create a new Counter with the given initial value", async () => {
      const Counter = await ethers.getContractFactory("Counter");

      const counter0 = await Counter.deploy(0);
      expect(await counter0.value()).to.equal(0);

      const counter2 = await Counter.deploy(2);
      expect(await counter2.value()).to.equal(2);
    });

    it("Should not accept odd initial values", async () => {
      const Counter = await ethers.getContractFactory("Counter");
      await expect(Counter.deploy(3)).to.be.revertedWith(
        "Initial value must be even"
      );
    });
  });

  describe("Increments", () => {
    it("Should increment the value by 1", async () => {
      const Counter = await ethers.getContractFactory("Counter");
      const counter0 = await Counter.deploy(0);

      await counter0.increase();
      expect(await counter0.value()).to.equal(1);

      await counter0.increase();
      expect(await counter0.value()).to.equal(2);
    });

    it("Should emit ValueIncreased", async () => {
      const Counter = await ethers.getContractFactory("Counter");
      const counter0 = await Counter.deploy(0);

      await expect(counter0.increase())
        .to.emit(counter0, "ValueIncreased")
        .withArgs(1);
    });
  });
});
