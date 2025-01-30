// #!/usr/bin/env node

'use strict';

//const { split } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
//I: function with one parameter representing a string
//O: numerical value of the length of the string
//C:
//E:
//return the length of string using length method
return string.length; 
   
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    //I: function with one param representing a string
    //O:  the input string should return as a lowercase string
    //C:
    //E:
    // create empty variable to assign to results of returning string to lower case
    var lCase = ''; 
    //return input string as lower case using toLowerCase property
    return lCase = string.toLowerCase();
   

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
  //I: function with one param representing a string
    //O:  the input string should return as an  uppercase string
    //C:
    //E:
    // create empty variable to assign to results of returning string to uppercase
    var uCase = ''; 
    //return input string as upper case using toUpperCase property
    return uCase = string.toUpperCase(string);
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//I: function with one param represented as a string
//O: return new string with dashes in the lower case
//C:
//E: 

//init var to hold results use split to separate string separate string using space btween the quotes
var newArray = string.split(' ');
//use join to concatenate string using dash as the separator
var newString = newArray.join('-');
// return newString string in the lowerccase
return newString.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//I: Function with two parameters reprsenting a single character and a string
//O: Boolean of true if the input string begins with the single char or false if the opposite
//C: function is case insensitive
//E: 
//create new variable assigned to empty array to contain split string
var splitString = [];
// use split to convert string to array to access string
splitString = string.split('');
//create conditional statement using stricly equal,toUpperCase and toLowerCase, bracket notation to access splitString array    
if (splitString[0] === 
    char.toUpperCase()) {
        return true;
    } if (splitString[0] === 
    char.toLowerCase()) {
        return true;
    } else{
        return false
    }
} 
// use console.log to call function and check results
console.log(beginsWith('Max', 'm')); // => true;
console.log(beginsWith('Max', 'z')); // => false;)
 
    

    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//I: Function with two parameters reprsenting a single character and a string
//O: Boolean of true if the input string ends with the single char or false if the opposite
//C: function is case insensitive
//E:
//create new variable assigned to empty array to contain split string
var splitString = []; 
// use split to convert string to array to access string
splitString = string.split('');
//create conditional statement using stricly equal,toUpperCase and toLowerCase length property and bracket notation to access splitString array    
if (splitString[splitString.length -1] === 
    char.toUpperCase()) {
        return true;
    } 
    if (splitString[splitString.length - 1]  === 
    char.toLowerCase()) {
        return true;
    } 
    else{
        return false
    }
} 
// use console.log to call function and check results
console.log(endsWith('Max', 'm')); // => false;
console.log(endsWith('Max', 'z')); // => false;)


    // YOUR CODE ABOVE HERE //


/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: function with two parameters represented as strings
//O: return the input strings as one string
//C:
//E:
// return stringOne plus stringTwo 
 return stringOne + stringTwo;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // I: function with two parameters 
    //O: string with all arguments from function joined together
    //C:
    //E:
    var args = Array.from(arguments);
    // console.log args to see what the results look like
//console.log(args)
//use join method to join elements of array together
return args.join('');


    // YOUR CODE ABOVE HERE //
}
console.log(join('red', true));

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //I: function with two parameters representing strings
    //O: function should return string with longest length
    //C:
    //E:
    //init if statement to compare lengths of stringOne vs stringTwo
    if( stringOne.length > stringTwo.length){
        return stringOne;
    }
    else{
        return stringTwo;
    }
}

console.log(longest('ben','maggie'));

    // YOUR CODE ABOVE HERE //


/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: function with two string paremeters
//O: number 1,0, or -1  depending on the placement of the string in the alphabet
//C:
//E:
// create if statement comparing alphabetical hierarchy 
  if (stringOne < stringTwo) {
    return 1;
  }
  if (stringOne > stringTwo) {
    return -1;
  }
  else {
    return 0;
}
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//I: function with two string paremeters
//O: number 1,0, or -1  depending on the placement of the string in the alphabet
//C:
//E:
// create if statement comparing alphabetical hierarchy 
if (stringOne > stringTwo) {
    return 1;
  }
  if (stringOne < stringTwo) {
    return -1;
  }
  else {
    return 0;
}


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}