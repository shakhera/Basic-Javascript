const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    displayPhones(data.data);
}
const displayPhones = (phones) => {
    // console.log(phnes.data);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    //display only 10 phones
    phones = phones.slice(0, 6);
    //display no phones
    const noMesg = document.getElementById('no-phone-mesg');
    if (phones.length === 0) {
        noMesg.classList.remove('d-none')
    }
    else {
        noMesg.classList.add('d-none')
    }
    //display phones
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add = 'col';
        phoneDiv.innerHTML = `
        <div class="card p-4 " >
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    // stop loader
    toggleSpinner(false);
}
//handle search buttion click
document.getElementById('btn-search').addEventListener('click', function () {
    //start loader
    toggleSpinner(true);
    const phoneField = document.getElementById('phone-field');
    const searchText = phoneField.value;
    loadPhones(searchText);
})
const toggleSpinner = isLoading => {
    const loaderSpinner = document.getElementById('loader');
    if (isLoading) {
        loaderSpinner.classList.remove('d-none');
    }
    else {
        loaderSpinner.classList.add('d-none');
    }
}

// loadPhones();
