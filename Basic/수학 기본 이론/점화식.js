/***
 * 점화식 (=재귀식)
 * 수열에서 이웃하는 두개의 항 사이에 성립하는 관계를 나타낸 관계식 
 * ex) 등차, 등비, 팩토리얼, 피보나치 
 */

// 등차수열 an = a + (n-1)d
let result;
function recursive(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive(s, t, number - 1) + t;
}

// a = 3, n = 5, d = 2 일 경우 
result = recursive(3, 2, 5);
console.log(result);

// 등비수열 an = ar^(n-1)
function recursive2(s, t, number) {
  if (number == 1) {
    return s;
  }
  return recursive2(s, t, number - 1) * t;
}

// a = 3, n = 5, d = 2 일 경우 
result = recursive2(3, 2, 5);
console.log(result);

// 팩토리얼
function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return factorial(number - 1) * number;
}

console.log(factorial(5));

// 피보나치 
function fib(number) {
  if (number == 1 || number == 0) {
    return number;
  }
  return fib(number - 1) + fib(number - 2);
}

console.log(fib(5));
// fib(5) = fib(4) + fib(3)
// ...
// fib(2) = fib(1) + fib(0)
// 0 1 1 2 3 5

