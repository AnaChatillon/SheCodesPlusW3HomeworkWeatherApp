let city = prompt("Enter a city");
city = city.toLowerCase().trim();

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
  sintra: {
    temp: 18,
    humidity: 60,
  },
};

if (city in weather) {
  let temp = Math.round(weather[city].temp);
  let tempF = Math.round((temp * 9) / 5 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${temp}, (${tempF}ºF) in ${city} with a humidity of ${humidity}.`
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
      city
  );
}
