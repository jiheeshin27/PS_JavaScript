/**
 * 
 */

// dwarf의 sum - 100 의 값을 만족시키는 두 수 구하면 될 듯
function answer(dwarf) {
  let result = [];
  result = dwarf.slice(0);
  const total = dwarf.reduce((total, el) => {
    return total + el;
  }, 0);

  const twoSum = total - 100;
  let val = [];

  for (let i = 0; i < dwarf.length; i++) {
    const dif = twoSum - dwarf[i];
    if (dwarf.includes(dif)) {
      val.push(dwarf[i]);
      val.push(dif);
      break;
    }
  }

  result.filter((item) => {
    return item !== val[0] && item !== val[1];
  })

  return result;
}
  
console.log(answer([1,5,6,7,10,12,19,29,33]));
console.log(answer([25,23,11,2,18,3,28,6,37]));
console.log(answer([3,37,5,36,6,22,19,2,28]));