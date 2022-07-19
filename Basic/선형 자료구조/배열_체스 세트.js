/**
 * 순서 및 기물 필요 개수: king(1), queen(1), rooks(2), bishops(2), knights(2), pawns(8)
 * input => array[] / 체스 기물 별 개수
 * output => array[] / 부족하거나 많은 기물의 개수 
 */

function answer(chess) {
  let result = [];
  const setting = [1, 1, 2, 2, 2, 8];

  for (let i = 0; i < setting.length; i++) {
    result.push(setting[i] - chess[i]);
  }

  return result;
}

let input = [
  [0, 1, 2, 2, 2, 7],
  [2, 1, 2, 1, 2, 1],
  [0, 1, 1, 5, 3, 6]
];

for (let i = 0; i < input.length; i++) {
  console.log(answer(input[i]));
}