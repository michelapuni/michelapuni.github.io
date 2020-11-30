const api = {
    key: "35546c1bcfea3a446605a3bf6e5b56fa",
    base:"https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°
    F</span>`;

    let weather_element = document.querySelector('.current .weather');
    weather_element.innerText = weather.weather[0].main;
    if(weather_element.innerText == 'Clouds'){
        weather_element.innerText = 'Cloudy';
        document.getElementById("defaultpic").src="cloudy.jpg";
    }
    if(weather_element.innerText == 'Clear'){
        weather_element.innerText = 'Sunny';
        document.getElementById("defaultpic").src="sunny.jpg";
    }
}


