// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IJackpot {
    function triggerJackpot(address winner) external;
}

contract CoinFlip {
    address public owner;
    address public externalWallet;
    address public jackpotContract;
    uint256 public houseEdge = 5; // 5% to external wallet and 5% to jackpot
    uint256 public multiplier = 19; // 1.9x winnings

    event FlipResult(address indexed player, bool win, uint256 amountWon);
    event JackpotWon(address indexed player, uint256 jackpotAmount);

    constructor(address _externalWallet, address _jackpotContract) {
        owner = msg.sender;
        externalWallet = _externalWallet;
        jackpotContract = _jackpotContract;
    }

    receive() external payable {}

    function flip() public payable {
        require(msg.value > 0, "Bet amount must be greater than 0");

        // Randomly determine if the player wins
        bool win = (block.timestamp + block.difficulty) % 2 == 0;
        uint256 betAmount = msg.value;

        if (win) {
            uint256 payout = (betAmount * multiplier) / 10; // 1.9x winnings
            require(address(this).balance >= payout, "Insufficient contract balance");

            // Calculate the house edge amounts
            uint256 externalWalletAmount = (payout * houseEdge) / 100;
            uint256 jackpotAmount = (payout * houseEdge) / 100;
            uint256 playerPayout = payout - externalWalletAmount - jackpotAmount;

            // Transfer to external wallet and jackpot contract
            payable(externalWallet).transfer(externalWalletAmount);
            payable(jackpotContract).transfer(jackpotAmount);
            payable(msg.sender).transfer(playerPayout);

            emit FlipResult(msg.sender, true, playerPayout);

            // Check if the jackpot is triggered
            if (random() < 1) {
                IJackpot(jackpotContract).triggerJackpot(msg.sender);
            }
        } else {
            emit FlipResult(msg.sender, false, 0);
        }
    }

    function random() private view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(block.difficulty, block.timestamp, msg.sender))) % 100;
    }

    function setExternalWallet(address _externalWallet) public onlyOwner {
        externalWallet = _externalWallet;
    }

    function setJackpotContract(address _jackpotContract) public onlyOwner {
        jackpotContract = _jackpotContract;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }
}
