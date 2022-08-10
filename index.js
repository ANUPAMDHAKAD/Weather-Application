const weatherApi = {
    key: "bab281d79e5f1e9755a68d754cc313e7",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

// var city = "kota";

// var data ={};

const searchinputbox = document.getElementById('input-box');
// event listner function
searchinputbox.addEventListener('keypress' , (event) =>{
    if(event.keyCode == 13){
        console.log(searchinputbox.value);
        getWeatherReport(searchinputbox.value);
        document.querySelector('.weather-body').style.display = "block";

    // city = searchinputbox.value;
    // getWeatherReport(city); 
    }
});

// get weather report
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showweatherreport);
}
// function getWeatherReport(city) {
//     fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
//     .then(weather => {
//         return weather.json();
//     }).then(res => { data=res});
// }

//show weather report
function showweatherreport(weather){
    console.log(weather);

    let city = document.getElementById("city");
    city.innerText = `${weather.name} , ${weather.sys.country}`;

    let temperature  =  document.getElementById('temp');
    temperature.innerHTML  = `${weather.main.temp}&deg;C`;

    let minmaxtemp  = document.getElementById('min-max');
    minmaxtemp.innerHTML  = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weathertype = document.getElementById('weather');
    weathertype.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todaydate = new Date();
    date.innerText = datemanage(todaydate);
}

//date manage
function datemanage(x){
    let days = ["sunday", "monday", "tuesday", "wednesday", "thursday" , "friday", "saturday"];

    let months = ["jan" , "feb" , "March" , "April" , "May", "June", "July", "Aug", "Sept" , "Aug", "Nov", "Dec"];

    let year = x.getFullYear();
    let month = months[x.getMonth()];
    let date = x.getDate();
    let day  = days[x.getDay()];

    return `${date} ${month}  (${day})   ${year}`;
}


