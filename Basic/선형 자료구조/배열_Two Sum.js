/**
 * Two Sum
 * input => 배열과 정수 
 * output => 두 값을 합하여 정수 값을 만들 수 있는 두 개의 index
 * 조건) 동일 요소 두 번 사용 X, 배열의 index는 오름차순으로 정렬하여 반환
 */


function answer(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === num) return [i, j];
    }
  }
}


function answer2(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (map[difference] != undefined) {
      return [map[difference], i];
    }
    map[nums[i]] = i;
  }
}

console.log(answer2([2, 7, 11, 15], 9));
console.log(answer2([3, 2, 4], 6));
console.log(answer2([3, 3], 6));