'use strict';

/*
* latinSquare
*       - size
*       - elements: array of unique elements constituting latin square
*       - square: 2D array with acutal lating square
* */
module.exports.generate = function(input){
    var elements = [];
    var size = 0;
    if(_isValidSize(input)){
        return generateDefaultLatinSquare(input);
    }
    else if(_isValidElementsArr(input)){
        elements = input.slice();
        elements.sort();
        size = elements.length;
        return generateLatinSquare(elements);
    }
    else {
        throw new TypeError('Expected an integer or array with unique elements');
    }
}

module.exports.validate = function(lSquare){

    var result = _validateLatinSquare(lSquare);
    if( result === ""){
        return true;
    }
    else    {
        return false;
    }

}


function generateLatinSquare(elements){
    if(_isValidElementsArr(elements)){
        var lSquare = generateDefaultLatinSquare(elements.length);
        var sq = lSquare.square;
        for(var r=0; r< sq.length; r++ ){
            for(var c=0; c < sq.length; c++){
                lSquare.square[r][c] = elements[lSquare.square[r][c] - 1]
            }
            lSquare.elements = elements;
        }
        return lSquare;

    }
    else {
        return null;
    }
}

function generateDefaultLatinSquare(size){
    var lSquare = null;
    if(_isValidSize(size)){
        lSquare = new Array(size);
        var elements = [];
        for(var i = 1; i<= size; i++){
            elements.push(i);
            //lSquare[i-0] = [];
        }
        for( i = 0; i< size; i++){
            lSquare[i] = new Array(size);
        }
        var row = elements.slice();
        row = _shuffle(row);
        lSquare[0] = row;
        for(var r = 1; r< size; r++){
            for(var c = 0; c < size; c++){
                var items = elements.slice();
                items = _shuffle(items);
                for(var c1 = 0; c1 < c; c1++){
                    _removeItemFromArray(items, lSquare[r][c1]);
                }
                for(var r1 = 0; r1 < r; r1++){
                    _removeItemFromArray(items, lSquare[r1][c]);
                }

                if(items[0] === undefined){
                    return generateDefaultLatinSquare(size);
                }
                else{
                    lSquare[r][c] = items[0];
                }


            }
        }

        return {
            size: size,
            elements: elements,
            square: lSquare
        }


    }
    return lSquare;
}


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

function _isValidSize(n){
    return (typeof n === 'number') && (n % 1 === 0) && n > 0 ;
}

function _isValidElementsArr(arr){
    /*
    * array length should be > 0 and each element in the array should be unique.
    * */
    if(!Array.isArray(arr)){
        return false;
    }
    if(_isValidSize(arr.length)){
        arr.sort();
        for ( var i = 1; i < arr.length; i++ ){
            if(arr[i-1] == arr[i])
                return false;
        }
        return true;

    }
    else {
        return false;
    }


}

function _removeItemFromArray(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function _validateLatinSquare(lSquare){

    //Check-1 lSquare.size is integer > 0
    if(!_isValidSize(lSquare.size)){
        return "Invalid Size";
    }

    //Check-2 elements should be an array
    if(!Array.isArray(lSquare.elements)){
        return "elements is not an array";
    }

    //Check-3 elements should be an valid array with unique elements
    if(!_isValidElementsArr(lSquare.elements)){
        return "elements is not an valid array";
    }

    //Check-4 elements.length === size
    if(lSquare.elements.length !== lSquare.size){
        return "elements array length does not match size";
    }

    //Check-5 square should be 2D array with size x size
    if(lSquare.square.length !== lSquare.size){
        return "square size invalid";
    }
    for(var i in lSquare.square){
        if(!Array.isArray(lSquare.square[i])){
            return "square row " + i + " is not an array";
        }
        if(lSquare.square[i].length !== lSquare.size){
            return "square row " + i + " is not of proper size";
        }
    }

    //Check-6 basic latin square logic - item should be unique accross row and col
    for(var r = 0; r< lSquare.size; r++){
        for(var c = 0; c< lSquare.size; c++){
            var item = lSquare.square[r][c];
            for(var r1 = 0; r1< lSquare.size; r1++){
                if(r !== r1 && lSquare.square[r1][c] === lSquare.square[r][c])   {
                    return "duplicate item in col " + c;
                }
            }
            for(var c1 = 0; c1< lSquare.size; c1++){
                if(c !== c1 && lSquare.square[r][c1] === lSquare.square[r][c])   {
                    return "duplicate item in row " + r;
                }

            }

        }
    }

    //Check-7

    return "";
}