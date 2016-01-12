var ls = require("./index");
var assert =  require('assert');
var sq1 = ls.generate(['a', 'b', 'c', 'd', 'e']);
for (var i = 0; i < sq1.length; i++) {
    console.log(sq1[i].toString());
}

var valid = ls.isValidLatinSquare(sq1);
assert(valid === true);

for(var counter = 0; counter <= 50; counter++) {
    var n = Math.floor(Math.random() * (9 - 3) + 3);
    var x = ls.generate(n);

    console.log("==> Count:%d  Size: %d", counter, n);
    for (var i = 0; i < x.length; i++) {
        console.log(x[i].toString());
    }
    valid = ls.validate(x);
    console.log(valid);
    assert(valid === "");
}

