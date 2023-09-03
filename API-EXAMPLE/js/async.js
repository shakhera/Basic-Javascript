
const loadKanyeRestData = async () => {
    try {
        const url = `https://api.kanye.rest/`;
        const res = await fetch(url);
        const data = await res.json();
        displayKanyeRestData(data)
    }
    catch (error) {
        console.log(error)
    }
}
const displayKanyeRestData = data => {
    console.log(data);
    const kanyeQuotes = document.getElementById('quote');
    kanyeQuotes.innerText = data.quote;
}

loadKanyeRestData();
