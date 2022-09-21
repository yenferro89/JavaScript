var Queue = function() {
  collection = [];

  this.print = function () {
    console.log(collection);
  };

  this.enqueue = function (element) {
    collection.push(element);
  };

  this.dequeue = function () {
    return collection.shift();
  };

  this.peek = function () {
    return collection[0];
  };

  this.size = function () {
    return collection.length;
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let test = new Queue();
test.enqueue(1);
test.enqueue(10);
test.enqueue("a");
test.dequeue();
console.log(test.peek());
console.log(test.isEmpty());
console.log(test.size())
test.print();
