/* let count = 0

let myAge = 22

console.log(myAge); */

// Variable Exercise

/* let myAge = 22
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge); */


// Count Exercise

/* let bonusPoints = 50

bonusPoints = bonusPoints + 50

bonusPoints = bonusPoints - 75

bonusPoints = bonusPoints + 45

console.log(bonusPoints); */

// Function Practice

// Setting up the race

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
};

// GO!
// Players are running the race
// Race is finished

// Get ready for a new race

countdown();

// Create a function that logs out the number 42 to the console
// Call/invoke the function

function number() {
    console.log(42);
}

number();

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function sumLap() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

sumLap();

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable by one
// run it 3 times

function lapIncrement() {
    lapsCompleted = lapsCompleted + 1
}

lapIncrement()
lapIncrement()
lapIncrement()

console.log(lapsCompleted);

//String Practice

let username = "per"

//Create a variable, message, that stores the string: "You have three new notifications"

let message = 'You have three new notifications'

console.log(message + " " + username);

// Create a variable, messageToUser, that contains the message logged above

let messageToUser = message + ", " + username + "!"

console.log(messageToUser);

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

let myName = "Justin"
let greeting = "Hi, my name is "

// Create a third variable, myGreeting, that concatenates the two strings
// Log myGreeting to the console

let myGreeting = greeting + myName

console.log(myGreeting);


// Initialize the count as 0
// Listen for clicks on the increment button
// increment the count variable when the button is clicked
// Change the count-el int the HTML to reflect the new count

// DOM - Document Object Model - Used to modify websites

// Camel Case
let countEl = document.getElementById("count-el") // Pass in Argument
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0 
    console.log(count)
}


