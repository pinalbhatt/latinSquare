"use strict";

module.exports = {
    getRnd: getRnd,
    removeItemFromArrayByValue: removeItemFromArrayByValue,
    mergeAndRemoveDuplicatesFromArr: mergeAndRemoveDuplicatesFromArr,
    shuffleArr: shuffleArr


}

function mergeAndRemoveDuplicatesFromArr(a, b){
    var c = a.concat(b);
    var d = c.filter(function (item, pos) {return c.indexOf(item) == pos});
    return d;
}

function shuffleArr(arr){
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

function getRnd(min, max){
    //min (included) and max (excluded)
    return Math.floor(Math.random() * (max - min)) + min;
}

function removeItemFromArrayByValue(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}