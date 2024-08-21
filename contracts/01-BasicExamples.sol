// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.22;

contract BasicExample1 {
    string public param;

    constructor(string memory _param) {
        param = _param;
    }
}

contract BasicExample2 {
    uint public param;

    constructor(uint _param) {
        require(_param > 0, "Param should be greater than 0");

        param = _param;
    }
}
