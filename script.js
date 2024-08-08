const greeting = document.querySelector('#greeting');
const weather = document.querySelector('#weather');
const quote = document.querySelector('#quote');


// showGreeting function
function showGreeting() {
    let date = new Date();
    let hours = date.getHours();

    if (hours >= 5 && hours < 8) {
        greeting.innerHTML = "Rise and shine! JAYANTA";
    }
    else if (hours >= 8 && hours < 12) {
        greeting.innerHTML = "Good morning, JAYANTA";
    }
    else if (hours >= 12 && hours < 17) {
        greeting.innerHTML = "Good afternoon, JAYANTA";
    }
    else if (hours >= 17 && hours < 20) {
        greeting.innerHTML = "Good evening, JAYANTA";
    }
    else if (hours >= 20 && hours < 24) {
        greeting.innerHTML = "Good night, JAYANTA";
    }
    else {
        greeting.innerHTML = "What's up? JAYANTA";
    }

}

showGreeting();

setInterval(showGreeting, 60000); // every minuets


// getWeather function
async function getWeather() {
    const latitude = 26.71;
    const longitude = 88.4285;

    const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`;

    try {
        let response = await fetch(WEATHER_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        let data = await response.json();
        weather.innerHTML = `${data.current_weather.temperature}° Siliguri`

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

getWeather();

setInterval(getWeather, 60000); // every minutes


async function getQuote(){
    const QUOTE_URL = "https://api.quotable.io/quotes/random";

    try {
        let response = await fetch(QUOTE_URL);
        if(!response.ok){
            throw new Error('Quote response was not ok ' + response.statusText);
        }

        let data = await response.json();
        console.log(data);
        quote.innerHTML = `"${data[0].content}"`;

    } catch (error) {
        console.error('There was a problem with the fetch operation: ', error);
    }
}

getQuote();
setInterval(getQuote, 60000); // every hour
