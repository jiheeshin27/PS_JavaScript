/***
 * 벽돌 옮기기
 * input => array 
 * output => int (같은 높이를 맞추기 위해 옮겨야 하는 벽돌의 개수)
 */

function answer(blocks) {
  let result = 0;

  const sum = blocks.reduce((el, count) => {
    return el + count;
  }, 0)
  const avg = sum / blocks.length;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] > avg) {
      result += blocks[i]- avg;
    }
  }

  return result;
}


console.log(answer([5,2,4,1,7,5]));
console.log(answer([12,8,10,11,9,5,8]));
console.log(answer([27,14,19,11,26,25,23,15]));