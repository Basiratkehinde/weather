
let search = document.getElementById('search-input');


function handleBtn(){
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&apikey=82bbef3687b73aacfa175e9dabdb5012`)
    .then((res)=> res.json())
    .then(data =>{
        console.log(data)
        
        document.querySelector(".temp").innerHTML =Math.round(data.main.temp -273) + "°C";
        document.querySelector(".weat").innerHTML = `'WEATHER IN ${data.name}`;
        document.querySelector(".cloud").innerHTML =data.weather[0].main;
        document.querySelector(".hum").innerHTML =Math.round(data.main.humidity) + '%';
        document.querySelector(".wind").innerHTML =Math.round(data.wind.speed) + 'km/h';
    })  

}
