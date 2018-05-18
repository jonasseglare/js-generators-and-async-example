function* fibonacci() {
  var a = 0;
  var b = 1;
  while (true) {
    var nextA = b;
    var b = a + b;
    var a = nextA;
    var index = yield a;
    console.log("POSTED value for %j", index);
  }
}

var fib = fibonacci();

for (var i = 0; i < 30; i++) {
  console.log("Fib %d is %j", i, fib.next(i).value);
}
