const weather = document.querySelector(".js-weather");

const API_KEY ="05dd617d791ad73cfe4be9775bf2f37e";
const COORDS = 'coords';

function getweather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `&{temperature} @ ${place}`;
            console.log(json);
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
    
}



function handleGeoSuccess(position){
    const latitude = position.coords.latitude ;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getweather(latitude, longitude);
}

function handleGeoError(){
    console.log("Geo error");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null ){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getweather(parseCoords.latitue, parseCoords.longitude);
    }
}

function init(){
    loadCords();
}

init();