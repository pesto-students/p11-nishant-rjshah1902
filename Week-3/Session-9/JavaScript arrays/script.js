
let nums = [4,2,9,1,8];

let oddnumbers = [];

let evennumbers = [];

function divideArray(nums){
    
    for(i=0; i<nums.length; i++){

        if(nums[i]%2 === 0){
            oddnumbers.push(nums[i]);
        }else{
            evennumbers.push(nums[i]);
        }
   }
   
   return { oddnumbers: oddnumbers, evennumbers: evennumbers }
}

var response = divideArray(nums);

console.log(response.oddnumbers.sort());

console.log(response.evennumbers.sort());