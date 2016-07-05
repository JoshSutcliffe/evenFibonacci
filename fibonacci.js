console.log("connected");

var checkFibbo = function(num) {
  var sum = 0;
  var a = 0, b = 1, f = 1;
  for(var i = 2; i < num; i++) {
    f = a + b;
    a = b;
    b = f;
    if (f > 4000000) {
      break
    } else if (f % 2 === 0) {
      sum += f;
      debugger
    };
  };
  console.log(sum);
};

checkFibbo(100000000);
