// #!/usr/bin/env node

'use strict';

const { functions } = require("lodash");

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//I: function with 3 param represented as strings
//O: return object
//C: 
//E:

function makeContact(id, nameFirst, nameLast) {
    // return object 
    return { 
        id : id,
        nameFirst : nameFirst,
        nameLast : nameLast
    }
    
    

    
} 
//I: factory function with five keys comprised of functions.
// O:  First key returns length of array. Second key returns contact object to contacts array, third key returns contact object if string is 
//found in contacts array undefined if not, fourth key return removed contact object, fifth key returns string of full names separted by break 
//C:
//E: 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
       length: function(){
            return contacts.length;
       },
       //add key addContact value is function that adds contact object  to the contact array 
       addContact :  function(contact){
        //add for loop to iterate over length of the property, to access key value pairs and add to the list 
            for(var i = 0; i < contacts.length; i++);{
            //return contact added to contacts using push
            return contacts.push(contact);
            }
        },
            //add key findContact as function with one param rep as strings 
       findContact : function(fullName){
         //add for loop to iterate over length of the property, to access key value pairs and add to the list 
            var checkName = fullName.split(' ');
                for(var i = 0; i < contacts.length; i++){
                 // create conditional statement if fullName match name in contacts array then return contact object 
                 if (checkName[0] === contacts[i]['nameFirst'] && checkName[checkName.length - 1 ] === contacts[i]['nameLast']){
                    // return contact object
                    return (contacts[i]);
                        }
                 else {
                    return undefined;
                    }
                }
        },
        // add key value pair removeContact with function as value 
        removeContact: function(contact){
            // create for loop to iterate over contacts array to access elements of array
            // condition start at index 0, end at less than length of contacts array, increment +1
            for (var i = 0; i < contacts.length; i++){
                //return removed contact object
                return contacts.splice(contacts[i], 1)
            }
             

        },
        // add key value pair printAllContactNames  with function as value object as the param
        printAllContactNames: function(contact){
            //init var holderArray as empty array to collect key value pairs
            var holderArray = [];
            //init for loop to iterate over contacts array to access key value pairs of object in array
            // condition start at index 0, end at less than length of contacts array, increment +1
            for (var i = 0; i < contacts.length; i++){
                // push nameFirst value and nmeLast value into holder array 
                 holderArray.push(contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']);
                
            
            }
               //return holder array to string using to join method and new line 
                 return holderArray.join('\n');



        }




     

    
        // we implemented the length api for you //
       
    }

}

makeContactList(); // => { length: function(){}, addContact: function(){}, findContact: function(){}  }



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}