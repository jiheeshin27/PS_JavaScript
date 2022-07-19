/**
 * input => array[] 
 */

function answer(nums) {
  let result = [-21, -21];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > result[1]) {
      result[1] = nums[i];
      if (result[0] < result[1]) {
        [result[0], result[1]] = [result[1], result[0]];
      }
    }
  }

  return result;
}

let input = [
  [-11,5,18,-2,-3,6,4,17,10,9],
  [3,7,-14,2,-6,13,-20,-2,-7,6,-17,-5,14,-9,19]
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}