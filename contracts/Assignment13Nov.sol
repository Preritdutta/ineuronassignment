//SPDX-License-Identifier:MIT
pragma solidity ^0.8.6;

contract removeIndex{

uint[] public nums;


    function getValues() public view returns(uint[] memory)
    {
        return nums;
    }

function removeNumber() public 
{
    nums.pop();
}
function removeAtIndex(uint index)public
{
    uint k;
    k=nums[index];
    for(uint i=index;i<nums.length-1;i++){
        nums[i]=nums[i+1];
    }
    nums[nums.length-1]=k;
    nums.pop();
}

    
        



    

}