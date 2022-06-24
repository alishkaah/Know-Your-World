

//nav-bar toggle 
let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-input");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    // console.log(finalURL);
})