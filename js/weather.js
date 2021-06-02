const API_KEY = '9892144ed37252cbfd7bfc6589d2664f';

const fetchData = position =>{
    const {latitude, longitude} = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
}



const setWeatherData = data =>{
    console.log(data);
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"; 
    $(".icon").html("<img class = 'newIcon' src=" + iconUrl + ">");
    


    const weatherData ={
        location: data.name,
        description: data.weather[0].main,
        temperature: data.main.temp+"°C",

    }
    
    Object.keys(weatherData).forEach( key =>{
        document.getElementById(key).textContent = weatherData[key];
    });

    cleanUp();
}

const cleanUp = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none';
    container.style.display = 'flex';
}


const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);

}