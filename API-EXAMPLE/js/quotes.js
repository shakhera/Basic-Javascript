console.log('connected to html');
const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
loadQuotes();

const displayQuotes = (quotes) => {
    const kanyeQuotes = document.getElementById('quote');
    kanyeQuotes.innerText = quotes.quote;
    // console.log(quotes.quote);

}