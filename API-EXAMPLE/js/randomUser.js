const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}
loadUser();

const displayUser = user => {
    const userName = document.getElementById('name');
    const name = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last;
    userName.classList.add = 'name';

    userName.innerText = name;
    // console.log(user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last);

    const genderTag = document.getElementById('gender');
    genderTag.innerText = user.results[0].gender;

    const userLocationCity = document.getElementById('city');
    userLocationCity.innerText = user.results[0].location.city;
    // console.log(user.results[0].location.city)

    const userLocationStreet = document.getElementById('street');
    const streetLocatin = user.results[0].location.street.number + ' ' + user.results[0].location.street.name;
    userLocationStreet.innerText = streetLocatin;
    // console.log(user.results[0].location.street.number + ' ' + user.results[0].location.street.name)
}