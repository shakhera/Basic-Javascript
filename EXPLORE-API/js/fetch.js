// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json()) ////.json is not similar bt close to json.parse
//     .then(json => console.log(json))

const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
//     .then(r => r.json())
//     .then(json => console.log(json))

function loadData() {
    fetch(url)
        .then(r => r.json())
        .then(json => console.log(json))
}