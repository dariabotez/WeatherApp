const apiKey = 'c21e1ebd84a6153d92a892c6a1748810';
const searchButton = document.getElementById('search'); //setting up variablesfor button
const cityInput = document.getElementById('city'); //for city input field
const temperature = document.getElementById('temperature');//the outputs
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

searchButton.addEventListener('click', () => { //eventListener triggered when clicked
  const city = cityInput.value; //gets the value of the city input field
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl) //using the fetch() method to make a GET request to the API URL
    .then(response => response.json()) //parse the JSON response into a js object
    .then(data => { //uptades the text content of the 4 outputs
      temperature.innerText = `Temperature: ${data.main.temp}°C`;
      description.innerText = `Description: ${data.weather[0].description}`;
      humidity.innerText = `Humidity: ${data.main.humidity}%`;
      wind.innerText = `Wind Speed: ${data.wind.speed} km/h`;
    })
    .catch(error => {   //If an error occurs, the code logs an error message to the console and displays an alert to the user
      console.error(error);
      alert('An error occurred while fetching weather data.');
    });
});
