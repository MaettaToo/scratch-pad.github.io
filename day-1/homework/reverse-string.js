// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(strangeString) {
    // YOUR CODE GOES BELOW HERE //
    
    //I: function with strings as input
    //O: function will return the input string in the reverse
    //C:
    //E;
//Initialize var assigned to empty strings to collect reversed string 
var str = '';
    //Create for loop to access string iterating over length of string, start: end value of string, stop: beginning value of string, decrementing by 1
    for (var i = strangeString.length -1; i >= 0; i-- ){
    //assign the empty variable new value of variable plus the results of the loop
    str = str + strangeString[i];
    }
    //return the variable
    return str; 
    // call the function using console log to check results
  }
  //console.log(reverseString(hello));
    
    // YOUR CODE GOES ABOVE HERE //





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}