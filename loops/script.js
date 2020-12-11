// Loops

let moviesArray = ["It", "ET", "Up", "It 2", "D2", "Us", "Red", "Go"]

// While Loops

console.log(moviesArray.length)

let i = 0

while(i < moviesArray.length){
    console.log(moviesArray[i])
    i++
}


// let i = 1

// while(i < 20){
//     console.log("Hello, world")
//     console.log(i)
//     i++
// }

// Lightning Exercise
// In your JavaScript file, write a while loop that outputs the phrase "TWEET TWEET" 100 times to the console.

let j = 0

while(j < 100){
    console.log("TWEET TWEET")
    j++
}

// For Loops

for(let i = 0; i < moviesArray.length; i++){
    console.log(moviesArray[i])
}

// Lightning Exercise
// Psychotic Bird: For Loop Edition
// In your JavaScript, write a for loop that outputs the phrase "TWEET TWEET TWEET" 100 times to the console.
// Favorite Foods
// In your JavaScript, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
// Loop through the array and print each food item to the console.

for(let i = 0; i < 100; i++){
    console.log("TWEET TWEET TWEET")
}

let favoriteFoods = ["Tacos", "Pizza", "Chili", "Filet", "Chicken"]

for(let i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i])
}