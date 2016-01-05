var ls = require("./index");
var a = ls.generate(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
for (var i = 0; i < a.square.length; i++) {
    console.log(a.square[i].toString());
}

var valid = ls.validate(a);
console.log(valid);

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
    for (var i = 0; i < x.square.length; i++) {
        console.log(x.square[i].toString());
    }
    console.log(ls.validate(x))
}

