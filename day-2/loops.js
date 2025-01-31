// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //I: function with one parameter represented as an array
  //O: values of the array printed to the console
  //C: use loop
  //E: 
  //create for loop to access array, duration begin at 0index end length of array increment by 1 console block return console.log
  for (var i = 0; i<= array.length; i++ ){
     console.log(array[i]);
  }
  return array;

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //I: function with one parameter represented as an array  
  //O: values of the array printed to the console in reverse
  //C: use loop
  //E: 
  //create for loop to access array, duration begin at last value of array end at the 0 index increment by 1 console block  console.log array[i]
for(var i = array.length - 1; i >= 0; i--){
  console.log(array[i]);
}
    
 //return array
 return array;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //I: object with keys
  //O:an array made up of the object keys
  //C: 
  //E:
  //create for in loop, console block objectKeys to obtain keys, 
  for (var getKeys in object){
    //return  Object.keys
    return Object.keys(object);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //I: object with keys 
  //O: keys of object printed to the console
  //C:
  //E: 
  //create for in loop
  for (var key in object){//
    //console.log keys in object
    console.log(key);
  }
 
   
  }
  

 
  
  // YOUR CODE ABOVE HERE //}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //I:  function with an object as a param
  //O: an array with the object key
  //C: 
  //E: 
  // return array of object values using Object.values
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //I: function object 
  //O: the values of the object printed to the console
  //C:
  //E:
  //create for in loop 
  for(let key in object){
    //console.log values of object using bracket notation to access
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //I: function with one param input is an object
  //O: return the number of key values stored within input object
  //C:
  //E:
  //return the length of the object using Object.keys and the length property 
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //I: input function  with object as its parameter
  //O: object values printed to the console in reverse
  //C:
  //E:
  //init var as array assigned to object.values(object) to create an array   
  var anArray = Object.values(object);
  //create for loop to iterate over array and print values in reverse
for( var i = anArray.length - 1; i >= 0; i--){
  console.log( anArray[i]);

}

  }
 
  
  
  
  
  // YOUR CODE ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}