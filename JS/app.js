
//once content load do as instructed
document.addEventListener('DOMContentLoaded', getResult)
//nav-bar toggle 
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-input");
let result  = document.getElementById('result');
countryInp.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    getResult()
  }})
searchBtn.addEventListener("click", getResult);


async function getResult(){
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalURL);
    await fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        // console.log(data[0]);
        // console.log(Object.keys(data[0].currencies)[0]);
        // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
            <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${
                  data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>` 
    })
    .catch(() => {
        if (countryName.length == 0) {
          result.innerHTML = `<h3>You have not Entered a country Name</h3>`;
        } else {
          result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
        }
      });
}