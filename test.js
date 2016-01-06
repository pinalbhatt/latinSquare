var ls = require("./index");
var assert =  require('assert');
var sq1 = ls.generate(['a', 'b', 'c', 'd', 'e']);
for (var i = 0; i < sq1.length; i++) {
    console.log(sq1[i].toString());
}

var valid = ls.validate(sq1);
assert(valid === true, "expected true");

/*var b = {
    size: 5,
    elements: [1,2,3,4,5],
    square: [
        [1,2,3,4,5],
        [5,1,2,3,4],
        [2,3,4,3,1],
        [3,4,5,1,2],
        [4,5,1,2,3]
    ]
}


console.log(ls.validate(b));*/

for(var counter = 0; counter <= 50; counter++) {
    var n = Math.floor(Math.random() * (9 - 3) + 3);
    var x = ls.generate(n);

    console.log("%d %d", counter, n);
    for (var i = 0; i < x.length; i++) {
        console.log(x[i].toString());
    }
    valid = ls.validate(x);
    assert(valid === true, "expected true");
}

