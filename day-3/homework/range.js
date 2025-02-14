// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // I: function with two parameters represented as integers
    //O: array of integers in ascending order or descending order dependent upon  value of two integers
    //C:
    //E:
    //init var as empty array to collect returned output
    var  result = [];
    // init for loop with first condition = start, end with end incrementing by 1++
    //create if statement if end > than start push end to start to the array if Start is > end then push start to end to the array
    if ( start < end){ 
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
     return result;
     console.log(result);
  }
  else if (start > end ){
    for (var i = start; i >= end; i--) {
      result.push(i);
  }
   return result;
}
   

 
    
  

    
 


    
             
    
        
         
        
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}