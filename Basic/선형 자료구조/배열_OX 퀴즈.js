function answer(mark) {
  let result = 0;
  let adv = 0;
  for (let i = 0; i < mark.length; i++) {
    if (mark[i] === 1) {
      result += ++adv;
    } else {
      adv = 0;
    }
  }
  return result;
}

console.log(answer([1,0,1,1,1,0,1,1,0,0]));
console.log(answer([1,1,0,1,1,0,1,1,1,1]));
console.log(answer([1,1,1,1,1,0,0,1,1,0]));