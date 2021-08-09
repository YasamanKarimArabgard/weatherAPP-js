const api = { 
    key: "1cee8d4e291763a9aa06fa9742cfb599",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchBox = document.getElementById("search");

let setQuery = (evt) => {
   if(evt.keyCode === 13 ){
       getResults(searchBox.value);
   }
}

searchBox.addEventListener("keypress", setQuery);

let getResults = (query) =>{
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

let displayResults = (weather) => {
    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.getElementById("date");
    date.innerText = dateBuilder(now);

    let temp = document.getElementById("temper");
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weatherEl = document.getElementById("status");
    weatherEl.innerText = weather.weather[0].main;
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }