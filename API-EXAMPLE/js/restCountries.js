
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCounrties(data))
}
loadCountries();

const displayCounrties = (countries) => {
    const countryElement = document.getElementById('all-countries');
    // const countryInfo = countries[0].name;
    // console.log(countryInfo);
    countries.forEach(country => {
        // console.log(country.cca2);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>name: ${country.name.common}</h3>
        <p>Captital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <p>continents: ${country.continents[0]}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>

        `;
        // <p>flags: <img src="${country.flags.png}" alt="${country.flags.png}"></p>
        // capital thakle print korbe na thakle no capital mesg dibe;
        countryElement.appendChild(countryDiv);
    })
}
const loadCountryDetails = code => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}    `
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = details => {
    console.log(details);
    const counrtyDetails = document.getElementById('country-details');
    counrtyDetails.innerHTML = `
    <h3>Name: ${details.name.common}</h3>
    <strong>Country Code: ${details.cca2}</strong>
    <p>flags: <img src="${details.flags.png}" alt="${details.flags.png}"></p>

    `
}