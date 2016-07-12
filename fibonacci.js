console.log("connected");

var checkFibbo = function(num) {
  var sum = 0;
  var p = 0, l = 1, f = 1;
  for(var i = 2; i < num; i++) {
    f = p + l;
    p = l;
    l = f;
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
