function Train(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.size = function () {
  return this.length;
}

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    process.stdout.write(`${node.data} => `);
  }
  console.log('null');
};

function answer(li) {
  let ll = new LinkedList();

  let prev, current;
  for (let i = 0; i < li.length; i++) {
    current = new Train(li[i]);
    if (i == 0) {
      ll.head = current;
    } else {
      prev.next = current;
    }
    prev = current;
  }
  return ll;
}

console.log(answer([14, 13, 12, 11, 10]).printNode());


