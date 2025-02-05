// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: function with one param input can be string or number
    //O:return function that tests the input value from the 
    //parent function against a the given value of the returned function to see which one is greater
    //C:
    //E:
    // return a function with one param string or number  
    return function GivenValue(value){
        //create conditional statement comparing base to value
        if( value >  base){
            return true;
        }
        else{
            return false
        }

    }
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // return a function that tests whether base 
     //I: function with one param input can be string or number
    //O:return function that tests the input value from the 
    //parent function against a the given value of the returned function to see which one is less than
    //C:
    //E:
    // return a function with one param string or number  
    return function GivenValue(value){
        //create conditional statement comparing base to value
        if( value <  base){
            return true;
        }
        else{
            return false
        }

    }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //I: character of value startsWith 
    //O: return function tht tests if the value of internal function begin with the startswith character
    //C:
    //E: 
    //return function with one parameter represented as string
  return function testString(string){
// create conditional statement use charAt().toLowerCase or charAt().toUpperCase to compare cases
if(string.charAt(0).toLowerCase() === startsWith || string.charAt(0).toUpperCase() === startsWith){
    return true; //return true
      }
else {
   return false; // return false
}
        
    

}   
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
// YOUR CODE BELOW HERE //
    //I: function with one parameter representing a single character
    //O: return function tht tests if the last character of a string === the endsWith character
    //C: function needs to be case insensitive
    //E: 
    //return function with one parameter represented as string
    return function testString(string){
        // create conditional statement use charAt().toLowerCase or charAt().toUpperCase to compare cases
        if(string.charAt(string.length - 1).toLowerCase() === endsWith|| string.charAt(string.length - 1).toUpperCase() === endsWith){
            return true; //return true
              }
        else {
           return false; // return false
        }
                
            
        
        }   
            
            
              
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
  //I: function with two param values of an array of strings and a function
  //O: return the array of strings modified
  //C:
  //E:   
  //init variable as empty array purpose to collect empty strings
  var resultsArray = [];
   //init for loop to iterate over strings purpose to access strings and return modified array
    for( var i = 0; i < strings.length; i++){
  //call modify function       
 modify(strings[i]);
 // push modified string to empty array
resultsArray.push(modify(strings[i]));
    }        

//return modify results using push and empty array
console.log(resultsArray);
return resultsArray;     
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //I: function with two parameters represented as function designed to pass the test and array of strings
    //O: return a Boolean value based on whether argument passed the test/ return true if all strings pass the test
    //C:
    //E:
    // init var to hold results 
    var resultsArray = [];
    //init for loop to iterate over callback function and access values in array
    // for loop conditions began iteration at index 0, end iteration at < length of array, increment by one
    for( var i = 0; i < strings.length; i++){
        // call the test function to see if strings pass using bracket syntax strings index i
        test(strings[i]);
        //console.log(test(strings[i]));
    // create conditional statement if test(strings[i] === false return false); else return false
    if ( test(strings[i]) === false ){
        return false;
    } 
    //conditional stmt if test strings === true push test(strings[i]) into empty array
    if (test(strings[i]) === true){
        resultsArray.push(test(strings[i]));
    } 
       
}
  //init for loop to iterate over callback function and access values in array
    // for loop conditions began iteration at index 0, end iteration at < length of array, increment by one
for (var i = 0; i < resultsArray.length; i++){
    ////conditional stmt if resultsArray === true return true
    if (resultsArray[i] === true){
       //return true
        return true;
    }
}
   
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}