'use strict';




function _shuffle(arr){
    if(!Array.isArray(arr)){
        throw new TypeError('Expected an array');
    }

    var result = arr.slice();
    var len  = arr.length;
    var rnd,tmp;
    while(len){
        rnd = Math.floor(Math.random() * len--);
        tmp = result[len];
        result[len] = result[rnd];
        result[rnd] = tmp;
    }
    return result;
}