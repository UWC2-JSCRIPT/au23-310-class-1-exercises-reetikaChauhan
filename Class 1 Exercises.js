/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
var pizza_diameter1 = 13
var pizza_diameter2 = 17
var pizza_cost1 = 16.99
var pizza_cost2 = 19.99
var area1 = 3.1415 * (13/2)
console.log('Area of first pizza: ', area1)
var area2 = 3.1415 * (17/2)
console.log('Area of second pizza: ', area2)



// 2. What is the cost per square inch of each pizza?
costpersquareinch1 = area1/pizza_cost1
console.log('Cost per square inch of first pizza: ', costpersquareinch1)
costpersquareinch2 = area2/pizza_cost2
console.log('Cost per square inch of second pizza: ', costpersquareinch2)
// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)
var maxvalueofcard = 13
var minvalueofcard = 1
var random_Card = Math.floor(Math.random()*(((maxvalueofcard)-minvalueofcard)+1) + minvalueofcard)
console.log("Random Card is: ",random_Card)

// 4. Draw 3 cards and use Math to determine the highest
// card
var card1 = Math.floor(Math.random()*(((maxvalueofcard)-minvalueofcard)+1) + minvalueofcard)
var card2 = Math.floor(Math.random()*(((maxvalueofcard)-minvalueofcard)+1) + minvalueofcard)
var card3 = Math.floor(Math.random()*(((maxvalueofcard)-minvalueofcard)+1) + minvalueofcard)
var highest_Card = Math.max(card1,card2,card3)
console.log('First Card: ', card1)
console.log('Second Card: ', card2)
console.log('Third Card: ', card3)
console.log('Highest Card: ', highest_Card)


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
var firstName = 'Reetika'
var lastName = 'Chauhan'
var streetAddress = '35828 51st Ave S' 
var city = 'Auburn'
var state = 'Washington'
var zipcode = '98001'
var addressBlock = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipcode}`
console.log(addressBlock)


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
var givenString = `Reetika Chauhan
35828 51st Ave S
Auburn, Washington 98001`
var indexofFirstSpace = givenString.indexOf(' ')
var firstNameextracted = givenString.substring(0,indexofFirstSpace)
console.log('Extracted First Name is: ', firstNameextracted)


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
//const endDate = new Date(2019, 3, 1);
var startingdate = '1/1/2020 00:00:00'
var endingdate = '4/1/2020 00:00:00'
const startDate = new Date( startingdate)
const endDate = new Date( endingdate)
startdate_in_seconds = startDate.getTime()
enddate_in_seconds = endDate.getTime()
middate_in_seconds = (enddate_in_seconds + startdate_in_seconds)/2
const midDate = new Date(middate_in_seconds)
console.log('Middle Date: ', midDate)
