// Conditionals

// if(2 + 2 === 4){
//     console.log("We can math!")
// }

let myName = "Jordan"


if(myName === "John"){
    console.log("Where's the pizza?")
} else if(myName === "Jordan"){
    console.log("Hi Jordan!")
} else {
    console.log("You should be John")
}


let isHungry = false

if(isHungry){
    console.log("You should go eat")
} else {
    console.log("You should go run")
}

let a = 2
let b = 3
let c = 4

if(a + b === 5 && b + c === 7){
    console.log("You rock")
} else {
    console.log("You don't rock")
}


//Lightning Exercise

// In your JavaScript file, declare a new variable called likesToTravel and set it equal to true or false.
// If likesToTravel is true, log "Bon voyage!" to the console. If not, log "Enjoy your couch!" to the console.

let likesToTravel = true

if(likesToTravel){
    console.log("Bon Voyage!")
} else {
    console.log("Enjoy your couch!")
}

//Lightning Exercise
// In your JavaScript file, declare a new variable called favoriteFood and set it equal to your favorite food.
// Write a conditional that checks to see if the favoriteFood variable is equal to "fried pickles" OR "pepperoni rolls". If so, log "Congratulations! You have excellent taste!" to the console. Otherwise, log "Clearly you have not tried fried pickles or pepperoni rolls." to the console.

let favoriteFood = "tacos"

if(favoriteFood === "fried pickles" || favoriteFood === "pepperoni rolls"){
    console.log("Congratulations! You have excellent taste!")
} else {
    console.log("Clearly you have not tried fried pickles or pepperoni rolls.")
}


// Practice #1 Conditionals

if(1 + 1 > 5) {
    console.log("True fact!")
} else {
    console.log("LIES!")
}

if(4 * 5 <= 20) {
    console.log("True fact!")
} else {
    console.log("LIES!")
}

if(6 - 2 >= 0) {
    console.log("True fact!")
} else {
    console.log("LIES!")
}

// Practice #2 Conditionals

likesDogs = true
if(likesDogs) {
    console.log("You're a dog person!")
} else {
    console.log("You're a cat person!")
}

// Practice #3 Conditionals

birthYear = 1998

if(birthYear === 1998) {
    console.log("You're apart of Generation Z")
}

// Practice #4 Conditionals

let bob = {
    name: "Bob",
    preferredLanguage: "French"
}

if(bob.preferredLanguage === "English") {
    console.log(`Hello, ${bob.name}`)
} else if (bob.preferredLanguage === "Spanish") {
    console.log(`Hola, ${bob.name}`)
} else if (bob.preferredLanguage === "French") {
    console.log(`Bonjour, ${bob.name}`)
} else {
    console.log("You have no preferred language")
}

// Practice #5 Conditionals

let time = "7:00 PM"
isHungry = true

if(time === "7:30" && isHungry === true) {
    console.log("Time for breakfast!")
} else if (time === "12:00 PM" && isHungry === true) {
    console.log("Time for lunch!")
} else if (time === "7:00 PM" || time === "8:00 PM") {
    console.log("Time for dinner!")
} else if (isHungry === true) {
    console.log("Time for a snack")
} else {
    console.log("Have a cookie anyway!")
}

// Practice #6 Student Grades

let grade = 100

if(grade >= 0 && grade <= 69) {
    console.log("You got an F")
} else if (grade >= 70 && grade <= 76) {
    console.log("You got a D")
} else if (grade >= 77 && grade <= 84) {
    console.log("You got a C") 
} else if (grade >= 84 && grade <= 92) {
    console.log("You got a B")
} else if (grade >= 93 && grade <= 100) {
    console.log("You got an A")
}

// Challenge - Conditionals

