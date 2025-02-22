// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz(num) {
    // YOUR CODE GOES BELOW HERE //
//I: function with one parameter representing a number
// O:printed numbers 1-100, multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of 3 and five print 'FizzBuzz'
//C:
//E:
// create for loop, start at 1, end at 100 increment by 1
for (var i = 1; i <= 100; i++){
    // create conditional statement to determine multiples
 if (i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } 
else if(i % 3 === 0){
    console.log('Fizz');
} 
else if (i % 5 === 0 ){
    console.log('Buzz');
}

 else {
    console.log(i);
}

}
}
 

    // YOUR CODE GOES ABOVE HERE //






// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
   }