let header1 = document.getElementById("h1");
let header2 = document.getElementById("h2");
let header3 = document.getElementById("h3");

let span1 = document.getElementById("tab1");
span1.onclick = () => spanClicked(header1);
let span2 = document.getElementById("tab2");
span2.onclick = () => spanClicked(header2);
let span3 = document.getElementById("tab3");
span3.onclick = () => spanClicked(header3);


function spanClicked(element) {
    let headers = document.getElementsByClassName("header");
    for (const e of headers) {
        e.style.display = e !== element ? "none" : "flex"
    }
}

spanClicked(header1);