/**
 * 잃어버린 카드 찾기
 * 등차수열을 이루는 4개의 숫자 카드, 한 카드를 잃어버림. 잃어버린 카드 찾기
 * input => 3개의 숫자 (자연수)
 * output => 잃어버린 카드의 수 (가운데 숫자 카드)
 * ex) 1, 7, 10 => 4
 */

function myCode(n1, n2, n3) {
  const nums = [n1, n2, n3];
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const d = (max - min) / 3;
  return nums.includes(min+d) ? min+2*d : min+d;
}

console.log(myCode(1,7,10));
console.log(myCode(3,8,18));
console.log(myCode(11,2,5));

// solution
function answer(a, b, c) {
  let number = 0;

  // sort
  let num = [a, b, c];
  num.sort((x, y) => x - y);

  // get d
  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  // get location
  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  // calc number
  number = num[0] + d * index;

  return number;

}

console.log(answer(1,7,10));