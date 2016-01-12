"use strict";

var genHelper = require("./genHelper");

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
    return _validateLatinSquare(lSquare);
}

module.exports.isValidLatinSquare = function(lSquare){
    var valid =  _validateLatinSquare(lSquare);
    if(valid === "") return true;
    else return false;
}

function generateLatinSquare(elements){
    if(_isValidElementsArr(elements)){
        var lSquare = generateDefaultLatinSquare(elements.length);
        var sq = lSquare;
        for(var r=0; r< sq.length; r++ ){
            for(var c=0; c < sq.length; c++){
                lSquare[r][c] = elements[lSquare[r][c] - 1]
            }
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
        }
        for( i = 0; i< size; i++){
            lSquare[i] = new Array(size);
        }
        var row = elements.slice();
        row = genHelper.shuffleArr(row);
        lSquare[0] = row;
        for(var r = 1; r< size; r++){
            for(var c = 0; c < size; c++){
                var items = elements.slice();
                items = genHelper.shuffleArr(items);
                for(var c1 = 0; c1 < c; c1++){
                    genHelper.removeItemFromArrayByValue(items, lSquare[r][c1]);
                }
                for(var r1 = 0; r1 < r; r1++){
                    genHelper.removeItemFromArrayByValue(items, lSquare[r1][c]);
                }

                if(items[0] === undefined){
                    return generateDefaultLatinSquare(size);
                }
                else{
                    lSquare[r][c] = items[0];
                }


            }
        }

    }
    return lSquare;
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


function _validateLatinSquare(lSquare){

    var i, j, size ;
    //Check lSquare should be an 2d array with size > 0
    if(!Array.isArray(lSquare)){
        return "Not An Array";
    }

    size = lSquare.length;
    if(!_isValidSize(size)){
        return "Invalid Size";
    }

    for(i in lSquare){
        if(!Array.isArray(lSquare[i])){
            return "Not a valid 2D Array";
        }
        var sz = (lSquare[i]).length;
        if(!_isValidSize(sz)){
            return "Not a valid sized 2D Array";
        }

        if(sz !== size){
            return "Not a valid 2D square Array";
        }
    }

    //Check-6 basic latin square logic - item should be unique across row and col
    for(var r = 0; r < size; r++){
        for(var c = 0; c < size; c++){
            var item = lSquare[r][c];
            for(var r1 = 0; r1< size; r1++){
                if(r !== r1 && lSquare[r1][c] === lSquare[r][c])   {
                    return item + " repeated in column " + c;
                }
            }
            for(var c1 = 0; c1< size; c1++){
                if(c !== c1 && lSquare[r][c1] === lSquare[r][c])   {
                    return item + " repeated in row " + r;
                }

            }

        }
    }
    return "";
}