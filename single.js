const back = document.getElementById('back');
const countryList = document.getElementById('country-list');

back.addEventListener('click', fetchCountryData);

function fetchCountryData() {
  fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => {
      displayCountryData(data);
    })
    .catch(error => console.error(error));
}

function displayCountryData(data) {
  data.forEach(country => {
    const countryDiv = document.createElement('div');
    const countryName = document.createElement('h2');
    const countryCapital = document.createElement('p');
    const countryPopulation = document.createElement('p');

    countryName.textContent = country.name.common;
    countryCapital.textContent = `Capital: ${country.capital[0]}`;
    countryPopulation.textContent = `Population: ${country.population}`;

    countryDiv.appendChild(countryName);
    countryDiv.appendChild(countryCapital);
    countryDiv.appendChild(countryPopulation);
    countryList.appendChild(countryDiv);

    countryDiv.addEventListener('click', () => {
      window.location.href = `country.html?name=${encodeURIComponent(country.name.common)}`;
    });
  });
}