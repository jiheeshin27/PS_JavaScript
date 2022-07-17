// 등차수열의 항 찾기 
// input => a(초항), d(차), n(찾는 항의 수)
// output => 항 번호 (항 번호가 없을 시 -1 반환)
// ex) a = 1, d = 2, n = 7 일 때 output은 4


// mycode
function getSeq(a, d, n) {
  let count = 0;
  let result = 0;
  for (let i = 0; result <= n; i++) {
    if (i == 0) {
      result = a;
    } else {
      result += d;
    }
    count++;
    if (result == n) {
      return count;
    }
  }
  return -1;
}

console.log(getSeq(3,5,23));

// solution
function answer(a, d, n) {
  let index = -1;
  let num;
  for (let i = 1; ; i++) {
    num = a + (i - 1) * d;

    if (num > n) {
      index = i;
      break;
    }
  }
  return index;
}
