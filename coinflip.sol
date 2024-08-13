// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoinFlip {
    address public owner;

    event FlipResult(address indexed player, bool win, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function flip() public payable {
        require(msg.value > 0, "Must bet some Ether");
        require(msg.value <= address(this).balance, "Not enough balance in contract");

        // Generate pseudo-random number
        uint256 flipResult = block.timestamp % 2;
        bool win = flipResult == 1;

        if (win) {
            // Player wins: send double the bet amount
            payable(msg.sender).transfer(msg.value * 2);
        }

        emit FlipResult(msg.sender, win, msg.value);
    }

    // Function to fund the contract
    function fundContract() public payable {
        require(msg.sender == owner, "Only the owner can fund the contract");
    }

    // Function to withdraw funds from the contract
    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        require(amount <= address(this).balance, "Not enough balance in contract");
        payable(owner).transfer(amount);
    }
}
