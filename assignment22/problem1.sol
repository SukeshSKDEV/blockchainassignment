//SPDX-License-Identifier:MIT
pragma solidity ^0.8.13;
contract removeArray{
    uint[] nums;

    function addNumber(uint num) public{
        nums.push(num);
    }

    function getArray() public view returns (uint[] memory){
        return nums;
    }

    function removeNumber(uint index) public{
        delete nums[index];

        for(uint i=index;i<nums.length-1;i++){
            nums[i]=nums[i+1];    // shifting each element from right to left after removing element
        }

        nums.pop(); // remove last empty element
    }
}