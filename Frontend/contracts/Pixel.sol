// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Pixel {
    address private immutable i_owner;

    uint256 private tokenID = 0;
    mapping (uint256 => string[]) s_tokenID_hash;

    constructor () {
        i_owner = msg.sender;
    }

    function addFile (string memory hash) public {
        s_tokenID_hash[tokenID].push(hash);
        tokenID++;
    }

    function editFile (string memory hash) public {
        s_tokenID_hash[tokenID - 1].push(hash);
    }

    function getCurrentTokenID () public view returns (uint256){
        return tokenID;
    }

    function getOwner() public view returns (address){
        return i_owner;
    }

    function getList(uint256 tokenid) public  view returns (string[] memory){
        return s_tokenID_hash[tokenid];
    }

    function getLatestEdit(uint256 tokenid) public  view returns (string memory){
        uint lastIndex = s_tokenID_hash[tokenid].length-1;
        return s_tokenID_hash[tokenid][lastIndex];
    }

}