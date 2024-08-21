// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

contract Counter {
    event ValueIncreased(uint newValue);

    uint public value;

    constructor(uint _value) {
        require(_value % 2 == 0, "Initial value must be even");

        value = _value;
    }

    function increase() public {
        value += 1;

        emit ValueIncreased(value);
    }
}
