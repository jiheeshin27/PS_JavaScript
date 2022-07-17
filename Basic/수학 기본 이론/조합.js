// 반복문으로 구현 (4C2)
let input = [1, 2, 3, 4];
let count = 0;

function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log(count);

// 재귀로 구현 
let input2 = [1, 2, 3, 4];
let output = [];
let count2 = 0;

// s: starting point, r: 뽑는 갯수 
function combination2(arr, data, s, idx, r) {
  if (s == r) {
    count2++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination2(arr, data, s + 1, i + 1, r);
  }
}

combination2(input2, output, 0, 0, 2);

console.log(count2);