function answer(height) {
  let str = "\n";
  for (let i = 0; i < height; i++) { 
    console.log(" ".repeat(height-(i+1))+"*".repeat(2*i+1));
  }
  return str;
}

function answer2(height) {
  let str = "\n";
  for (let i = 0; i < height; i++) { // 0, 1, 2
    for (let j = 0; j < height-(i+1); j++) {
      str += " ";
    }
    for (let j = 0; j < 2*i+1; j++) { 
      str += "*";
    }ß
    str += "\n";
  }
  return str;
}

console.log(answer(7));
console.log(answer2(5));