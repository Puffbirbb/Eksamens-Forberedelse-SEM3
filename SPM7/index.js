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

const trumpURL = "https://api.tronalddump.io/random/quote";

async function getTrump() {
    try {
        for (let i = 0; i < 3; i++) {
            const div = document.getElementById("result");
            const trump = await get(trumpURL);
            const p = document.createElement('p');
            p.id = i;
            p.textContent = trump.value + " - " + "Tag: " + trump.tags + " - " + trump._embedded.source[0].url;
            div.appendChild(p);
        }
    } catch (error) {
        const pError = document.createElement('p');
        pError.textContent = error;
    }
}

getTrump();

function newQuotes() {
    var newTrumpQuote = document.createElement("button");
    newTrumpQuote.id = "newTrumpQuote";
    newTrumpQuote.innerHTML = "New Quotes";
    newTrumpQuote.onclick = async function() {
        for (let i = 0; i < 3; i++){
            let tquote = document.getElementById("" + i);
            tquote.remove();
            console.log(i);
        }
        await getTrump();
    }
    document.body.append(newTrumpQuote);
}

newQuotes();

console.log(post(trumpURL, get(trumpURL)));