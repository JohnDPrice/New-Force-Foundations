var highTemperatures = [55, 57, 53, 47, 56, 50]
var lowTemperatures = [33, 30, 29, 35, 31, 32]

console.log(highTemperatures[0])

console.log(lowTemperatures[5])

var highTotal = 0;
for(var i = 0; i < highTemperatures.length; i++) {
    highTotal += highTemperatures [i];
}

var highAvg = highTotal / highTemperatures.length;

console.log(highAvg)

var lowTotal = 0;
for(var i = 0; i < lowTemperatures.length; i++) {
    lowTotal += lowTemperatures [i];
}

var lowAvg = lowTotal / lowTemperatures.length;

console.log(lowAvg)


let currentWeather = {
    temperature: {
        high: 55,
        low: 32
    },
    conditions: "mostly clear",
    astronomy: {
        sunrise: "7:43 AM",
        sunset: '5:09 PM'
    }
}

console.log("It's " + currentWeather.temperature.high + " degrees F and " + currentWeather.conditions)

console.log(currentWeather.temperature.high);
console.log(currentWeather.temperature.low);
console.log(currentWeather.conditions);
console.log(currentWeather.astronomy.sunrise);
console.log("Today we will reach a high of " + currentWeather.temperature.high + 
 " and a low of " + currentWeather.temperature.low + 
 ". The sun will rise at " + currentWeather.astronomy.sunrise);

 // Practice #4
 let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ]

   console.log(weatherForecast[0].conditions)
   console.log(weatherForecast[1].temperature.high)
   console.log(weatherForecast[1].astronomy.sunrise)
   console.log(weatherForecast[2].conditions)
   console.log(weatherForecast[2].astronomy.sunset)

   console.log(`The high on Sunday will be ${weatherForecast[2].temperature.high} and the low will be ${weatherForecast[2].temperature.low}. We're predicting a ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`)

// Practice #5 Arrays and Objects
let williamGrades = [62, 97, 99, 85, 73, 97];

console.log(williamGrades[0])
console.log(williamGrades[5])

var sum = 0
for(var i = 0; i < williamGrades.length; i++) {
    sum += williamGrades [i];
}

var avg = sum / williamGrades.length;

console.log(`William's average grade is ${avg}`)

// PRactice #7 Arrays and Objects
let tomHanks = {
    firstName: "Tom",
    lastName: "Hanks",
    age: 64,
    favoriteFood: "Gyro",
    hobbies: ["reading", "collecting antique typewriters", "acting"]
}

console.log(tomHanks.favoriteFood)
console.log(`${tomHanks.firstName} ${tomHanks.lastName} is ${tomHanks.age} years old. His favorite food is ${tomHanks.favoriteFood}.`)

let hobbiesSentence = `He has ${tomHanks.hobbies.length} hobbies: ${tomHanks.hobbies[0]}, ${tomHanks.hobbies[1]}, and ${tomHanks.hobbies[2]}`

console.log(hobbiesSentence)