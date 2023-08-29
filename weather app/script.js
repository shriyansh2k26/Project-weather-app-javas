const form = document.querySelector("form")
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const search = document.getElementById("search");
const weather = document.getElementById("weather");
form.addEventListener("submit", function (e) {
    // console.log(search.value);
    e.preventDefault();
    getweather(search.value);

});

const getweather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const fetch_url = await fetch(url);
    const data_fetch = await fetch_url.json();
return show(data_fetch)

}

const show = (data) => {
    weather.innerHTML = `
 <div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
<h2>${data.main.temp} ℃</h2>
<h4> ${data.weather[0].main} </h4>
</div>`
}
