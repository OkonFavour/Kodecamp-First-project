const countriesElem = document.querySelector('.countries')
const dropdown = document.querySelector('.dropdown')
const dropELement = document.querySelector('.main-drop')
const region = document.querySelectorAll('.region')
const search = document.querySelector('.search')
const toggle = document.querySelector('.toggle')
const moon = document.querySelector('.moon')

async function getCountry() {
    const URL = await fetch("https://restcountries.com/v2/all");
    const respond = await URL.json();
    console.log(respond);
    respond.forEach(element => {
        showCountry(element)
    });
}

getCountry()
function showCountry(data) {
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML = `
    <div class="country-img">
    <a href="./single.html"><img src="${data.flag}" alt=""></a>
        </div>
        <div class="country-info">
          <h5 class="countryName">${data.name}</h5>
          <p><strong>Population</strong> ${data.population}</p>
          <p class="regionName"><strong>Region</strong> ${data.region}</p>
          <p><strong>Capital</strong> ${data.capital}</p>
        </div>
    `
    countriesElem.appendChild(country)
}


dropdown.addEventListener("click", () => {
    dropELement.classList.toggle("showDropDown")

})

const regionName = document.getElementsByClassName('regionName')
const countryName = document.getElementsByClassName('countryName')
region.forEach(element => {
    element.addEventListener("click", () => {
        // console.log("hi");
        Array.from(regionName).forEach(elem => {
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid";
            } else {
                elem.parentElement.parentElement.style.display = "none";
            }
        });
    })
});

search.addEventListener("input", () => {
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";
        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    });
})

toggle.addEventListener("click", () => {
    document.body.classList.add("dark")
    moon.classList.toggle("bi-moon")
})

// const countrySingle = document.querySelector(".countrySingle")
// function showCountryDetail(data) {
//     countrySingle.classList.toggle("show")
//     countrySingle.innerHTML = `
//     <button class="back">Back</button>
//         <div class="main-single">
//             <div class="left-single">
//             <img src="${data.flag}"alt="">
//             </div>
//             <div class="right-single">
//                 <h1>${data.name}</h1>
//                 <div class="single-info">
//                     <div class="inside-left inner">
//                         <p><strong>Native Name:</strong> ${data.nativeName}</p>
//                         <p><strong>Population:</strong> ${data.population}</p>
//                         <p><strong>Region:</strong> ${data.rergion}</p>
//                         <p><strong>Sub-region:</strong> ${data.subregion}</p>
//                     </div>
//                     <div class="inner-right inner">
//                         <p><strong>Capital</strong> ${data.capital}</p>
//                         <p><strong>Top Level Domain</strong> ${data.topLevelDomain.map(elem => elem)}</p>
//                         <p><strong>Currencies</strong> ${data.currencies.map(elem => elem.name)}</p>
//                         <p><strong>Languages:</strong> ${data.languages.map(elem => elem.name)}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `
//     const back = countrySingle.querySelector(".back")
//     back.addEventListener("click", () => {
//         countrySingle.classList.toggle("show")
//     })

// }

// countrySingle.addEventListener("click", () => {
//     showCountryDetail(data)
// })
