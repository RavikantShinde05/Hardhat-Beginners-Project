// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;


contract BuyMeAcoffee {
    event NewMemo (
        address from,
        uint TimeStamp,
        string name,
        string message

    );

    struct Memo {
        address from;
        uint TimeStamp;
        string name;
        string message;
    }

    // address of the contract deployer
    address payable owner;

    // list of all the messages from coffee buyers
    Memo[] memos;

    constructor(){
        owner = payable(msg.sender);
    }
    function getMemos() public view returns(Memo[] memory){
        return memos;
    }

    function buyCoffee(string memory _name, string memory _message)public payable {
        require(msg.value > 0, "you must have amount more than 0");
            owner.transfer(msg.value);

            memos.push (Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
            ));

            emit NewMemo(
            msg.sender,
            block.timestamp,
            _name,
            _message
            );
    }
}
  