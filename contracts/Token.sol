// SPDX-License-Identifier: MIT

pragma solidity  ^0.8.26;

contract Token {
    string public name="Hardhat Token";
    string public symbol="HTH";
    uint public totalSupply = 10000;

    address public owner;

    mapping(address=>uint) balances;

    constructor(){
        balances[msg.sender]=totalSupply;
        owner=msg.sender;
    }

    function transfer(address to, uint amount) external{
        require(balances[msg.sender]>=amount, "Not enough balance/Tokens");
        balances[msg.sender]-=amount; //this means subract the balance from owner[msg.sender] after transfer the amount
        balances[to]+=amount; // this means add balance/token transfered "to" this address
    }

    function balanceof(address account) external view returns (uint256) {
        return balances[account];
    }

}