
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
        console.log(country.flags.png);
        console.log(country.flags);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>name: ${country.name.common}</h3>
        <p>Captital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        <p>continents: ${country.continents[0]}</p>
        <p>flags: <img src="country.flags.png" alt="country.flags.png"></p>
        `;
        // capital thakle print korbe na thakle no capital mesg dibe;
        countryElement.appendChild(countryDiv);

    })
}