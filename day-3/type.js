// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
   // I: function with one parameter
   //O: true or false dependent on if value is an array
   //C:
   //E:
   //create conditional stmt to return true if array is an array or false otherwise
   //use Array.isArray() to determine if value is an array
   if(Array.isArray(value) === true){
    return true;
   }
   else{
    return false;
   }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */
function isObject(value){
    // YOUR CODE HERE
    //I: function with one parameter value of param unknown
    // O: boolean true or false dependent on if value of function is object
    //C: 
    //E:
    // create if stmt using Array.isArray, instanceof, typeof, to set the conditions
   if(typeof value === 'object' && Array.isArray(value) !== true && value !== null && value instanceof Date !== true ){
        return true;
    }
    else{
        return false;
    }
  
    // YOUR CODE HERE
  } 

    
    
    
    // YOUR CODE ABOVE HERE //




/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //I: function with one parameter and unknown value
    //O: output return boolean true or false if inpt value is an array or object
    //C:
    //:E
    // create conditional stmt using typeof, instanceof and Array.isArray to determine value 
    if(typeof value === 'object' && Array.isArray(value) !== true && value !== null && value instanceof Date !== true){
        return true;
    }
    if(Array.isArray(value) === true){
        return true;
    }
     else{   return false
     

    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
  //I: function with one parameter unknown value 
// O: return output string with type of value
// C:
//E:
// conditional statement to output string of types 
   if(typeof value === 'string'){
    return 'string';
   }
    if(Array.isArray(value) === true){
    return 'array';
   }
   if(typeof value === 'object' && Array.isArray(value) !== true && value !== null && value instanceof Date !== true){
    return 'object';
   }
    if(typeof value === 'undefined'){
        return 'undefined';
    }
    if(typeof value === 'number'){ 
        return 'number';
    }
    if(typeof value === 'boolean'){
        return 'boolean';
    }
    if(value === null){
        return 'null';
    }
    if(typeof value === 'function'){
        return 'function';
    }
    if(value instanceof Date === true){
        return 'date';
}


    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}