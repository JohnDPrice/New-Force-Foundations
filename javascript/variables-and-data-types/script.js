//alert("Hello, world")

console.log("Howdy, world")

let johnObject = {
    firstName: "John",
    lastName: "Price",
    age: 22,
    likesTravel: true,
    favoriteSports: ["Football", "Basketball", "Golf", "Tennis"]
}

console.log(johnObject)
console.log(johnObject.favoriteSports[0])

// let firstName = "John"
// let lastName = "Price"
// let age = 22
// let likesTravel = true

// console.log(firstName, lastName, age, likesTravel)

let favoriteSportsArray = ["Football", "Basketball", "Golf", "Tennis"];

console.log(favoriteSportsArray);

console.log(favoriteSportsArray.length);

console.log("My number one favorite sport is " + favoriteSportsArray[3]);

let forestGump = {
    title: "Forest Gump",
    mainActor: {
        name: "Tom Hanks",
        yearBorn: 1953
    },
    yearMade: 1998,
    cast: ["Tom Hanks", "Jenny", "Guys on the bus"]
}

console.log(forestGump.title)
console.log(forestGump.mainActor)
console.log(forestGump.yearMade)

forestGump.yearMade = 1997 // This updates the value of the yearMade key

console.log(forestGump.yearMade)

console.log(forestGump.cast)

console.log(forestGump.cast[1])

console.log(forestGump.mainActor.name)
console.log(forestGump.mainActor.yearBorn)