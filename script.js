const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1c77c941a7msh00bec8eebf1874dp132f41jsn1cd150214d8e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather= (city) =>{
    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        // id               //access the value of object

        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

const shanghaiW = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
    .then(response => response.json())
    .then((response) => {
        // id               //access the value of object
        cloud_pct2.innerHTML= response.cloud_pct
        feels_like2.innerHTML = response.feels_like
        humidity2.innerHTML = response.humidity
        max_temp2.innerHTML = response.max_temp
        min_temp2.innerHTML = response.min_temp
        sunrise2.innerHTML = response.sunrise
        sunset2.innerHTML = response.sunset
        temp2.innerHTML = response.temp
        wind_degrees2.innerHTML = response.wind_degrees
        wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
const BostonW = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
    .then(response => response.json())
    .then((response) => {
        // id               //access the value of object
        cloud_pct3.innerHTML= response.cloud_pct
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        max_temp3.innerHTML = response.max_temp
        min_temp3.innerHTML = response.min_temp
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset
        temp3.innerHTML = response.temp
        wind_degrees3.innerHTML = response.wind_degrees
        wind_speed3.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
const LucknowW = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {
        
        // id               //access the value of object
        cloud_pct4.innerHTML= response.cloud_pct
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.min_temp
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset
        temp4.innerHTML = response.temp
        wind_degrees4.innerHTML = response.wind_degrees
        wind_speed4.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
const KolkataW = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {

        // id               //access the value of object
        cloud_pct5.innerHTML= response.cloud_pct
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        max_temp5.innerHTML = response.max_temp
        min_temp5.innerHTML = response.min_temp
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset
        temp5.innerHTML = response.temp
        wind_degrees5.innerHTML = response.wind_degrees
        wind_speed5.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));
}
shanghaiW()
BostonW()
LucknowW()
KolkataW()