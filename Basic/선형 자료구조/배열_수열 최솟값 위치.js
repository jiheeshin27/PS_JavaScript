/**
 * input => array[] / 수열, 100이하의 자연수
 * output => array[] / 수열 중 최소값의 위치
 */

function answer(nums) {
  let result = [];
  const min = nums.slice(0).sort((x, y) => x - y)[0];

  nums.forEach((el, idx) => {
    if (el == min) {
      result.push(idx);
    }
  });

  return result;
}

let input = [
  // TC: 1
  [5, 2, 10, 2],
  // TC: 2
  [4, 5, 7, 4, 8],
  // TC: 3
  [12, 11, 11, 16, 11, 12]
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}