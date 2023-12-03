const apiKey="9e9c804443ea1a30d21868766e265384";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon")

async function checkweather(city)
{
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main =="Haze" || data.weather[0].main =="Clouds")
    {
        weatherIcon.src = "./img/clouds.png"
    }
    else if(data.weather[0].main =="Clear")
    {
        weatherIcon.src = "./img/clear.png"
    }
    else if(data.weather[0].main =="Rain")
    {
        weatherIcon.src = "./img/rain.png"
    }
    else if(data.weather[0].main =="Drizzle")
    {
        weatherIcon.src = "./img/drizzle.png"
    }
    else if(data.weather[0].main =="Mist" || data.weather[0].main =="Smoke")
    {
        weatherIcon.src = "./img/mist.png"
    }
   

}
searchBtn.addEventListener("click", ()=>
{
    checkweather(searchBox.value);
})
