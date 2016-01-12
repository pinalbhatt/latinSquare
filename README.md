**Latin Square !!!**
===============
Small utility for Latin Square Generation &amp; Validation
----------
A Latin square is an n × n array filled with n different symbols, each occurring exactly once in each row and exactly once in each column. More about Latin Square can be found at

 - https://en.wikipedia.org/wiki/Latin_square
 - http://mathworld.wolfram.com/LatinSquare.html

Installation
--------------

This *latinsquare* package can be used to generate a Latin Square from an initial row of elements or just by giving size of the square.
> **To add to your project:**

>  npm install --save latinsquare

----------


Usage
-------
**To initiate object:**

>  var latinSquare = require("latinsquare");

**Create square from initial row of elements**


>  var square1 = latinSquare.generate(['a', 'b', 'c', 'd', 'e']);

 // ===> will return an 2D Array. Something like this:

a,b,c,e,d

d,a,b,c,e

b,d,e,a,c

c,e,a,d,b

e,c,d,b,a


**Create square for specific size**

>  var square2 = latinSquare.generate(4);

// ===> will return 4 X 4 lating square as 2D array  with numbers 1,2,3,4. Something like this

2,1,4,3

4,2,3,1

3,4,1,2

1,3,2,4

**Validation APIs**
 > var latinSquare = require("latinsquare");
 
 > var square = latinSquare.generate(5);
 
 > latinsquare.validate(square);
 
 > latinsquare.isValidLatinSquare(square); 
 
 // ===> 
 
 validate(square) returns empty string if square is a valid Latin Square or else returns string with error message.
 
 isValidLatinSquare(square) returns boolean true or false.
 