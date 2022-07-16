/**
 * 순열 (Permutation)
 * 서로 다른 n개의 원소 중에서 r를 중복 없이 골라 순서에 상관있게 나열하는 경우의 수 
 */

let input = ['a','b','c'];
let count = 0;

// 반복문으로 구현
function permutation(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      for (let k = 0; k < arr.length; k++) {
        if (i == k) continue;
        if (j == k) continue;

        console.log(arr[i], arr[j], arr[k]);
        count++;
      }
    }
  }
}

// permutation(input);
// console.log(count);

// 재귀로 구현
function permutation(arr, s, r) {
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀 
  }

  /**
   * main i = 0
   *  [a,b,c] (0과 0 스왑)
   *    => [a,b,c] (1과 1스왑)
   *    => [a,c,b] (1과 2스왑)
   * 
   * main i = 1
   *  [b,a,c] (0과 1 스왑)
   *    => [b,a,c] (1과 1스왑)
   *    => [b,c,a] (1과 2스왑)
   * 
   * main i = 2
   *  [c,b,a] (0과 2 스왑)
   *    => [c,b,a] (1과 1스왑)
   *    => [c,a,b] (1과 2스왑)
   */
}

permutation(input, 0, 2);
console.log(count);