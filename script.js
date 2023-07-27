const apiKey = 'c21e1ebd84a6153d92a892c6a1748810'; //token pentru a accesa API-ul OpenWeather
const searchButton = document.getElementById('search'); //setam variabile pt buton
const cityInput = document.getElementById('city'); // city input field
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

searchButton.addEventListener('click', () => { //eventListener triggered when clicked
  const city = cityInput.value; //preia valoarea introdusă de utilizator în câmpul de city input
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiUrl) //se face o cerere GET la API-ul OpenWeather cu URL-ul
    .then(response => response.json()) //parsam rezultatul JSON in obiectul js
    .then(data => { //uptades continutul textului cu cele 4 output uri
      temperature.innerText = `Temperature: ${data.main.temp}°C`;
      description.innerText = `Description: ${data.weather[0].description}`;
      humidity.innerText = `Humidity: ${data.main.humidity}%`;
      wind.innerText = `Wind Speed: ${data.wind.speed} km/h`;
    })
    .catch(error => {   //afisare mesaj de eroare
      console.error(error);
      alert('An error occurred while fetching weather data.');
    });
});
