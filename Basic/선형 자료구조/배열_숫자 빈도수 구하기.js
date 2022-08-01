/**
 * 숫자 빈도수 구하기
 * input => 두 자연수 M, N
 */
function answer(s, e) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  for (let i = s; i <= e; i++) {
    const num = i.toString().split('');
    for (let j = 0; j < num.length; j++) {
      result[num[j]] += 1;
    }
  }

  return result;
}

/**
 * solution
 */

 function answer2(s, e) {
  let result = [];

  for (let i = 0; i < 10; i++) {
    result[i] = 0;
  }

  let num;
  for (let i = s; i <= e; i++) {
    num = i;
    while(num != 0) {
      result[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }
  return result;
}

console.log(answer2(129,137));
console.log(answer2(1412,1918));