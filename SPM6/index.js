async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

let trumpQuoteLink = "https://www.tronalddump.io/random/quote";

async function getTrump() {
    for (let i = 0; i < 3; i++) {
        const trump = await get(trumpQuoteLink);
        const p = document.createElement('p');
        p.id = i;
        p.textContent = trump.value + " - " + "Tag: " + trump.tags + " - " + trump._embedded.source[0].url;
        document.body.appendChild(p);
        p.onclick = async function () {
            try {
                console.log("https://www.tronalddump.io/search/quote?query=" + trump.tags);
                let tagQuotes = await get("https://www.tronalddump.io/search/quote?query=" + trump.tags);
                console.log(tagQuotes);
                
                const quotes = tagQuotes._embedded.quotes;
                if (quotes) {
                    quotes.forEach((quote) => {
                        const p = document.createElement('p');
                        p.textContent = quote.value + " - " + "Tag: " + quote.tags + " - " + quote._embedded.source[0].url;
                        document.body.appendChild(p);
                    });
                }
            } catch (error) {
                console.log("Error:", error);
            }
        }
    }
}

getTrump();

document.getElementById("getQuotes").onclick = async function () {
    try {
        let quote = await get("https://www.tronalddump.io/random/quote");
        console.log(quote.value);
        const p = document.createElement('p');
        p.textContent = quote.value + " - " + "Tag: " + quote.tags + " - " + quote._embedded.source[0].url;
        document.body.appendChild(p);
    } catch (error) {
        console.log("Error:", error);
    }
}