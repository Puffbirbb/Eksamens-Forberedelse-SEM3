// Lav et array af biler med nummerplade, mærke, vægt og antal hjul.
let biler = [{
    "nummerplade": "AB 12 345",
    "maerke": "Ford",
    "vægt": 1000,
    "antalHjul": 20,
}, {
    "nummerplade": "CD 67 890",
    "maerke": "VW",
    "vægt": 1200,
    "antalHjul": 8,
}, {
    "nummerplade": "EF 23 456",
    "maerke": "Citroen",
    "vægt": 800,
    "antalHjul": 8,
}, {
    "nummerplade": "GH 89 012",
    "maerke": "Peugeot",
    "vægt": 900,
    "antalHjul": 4,
}, {
    "nummerplade": "IJ 45 678",
    "maerke": "Opel",
    "vægt": 1100,
    "antalHjul": 4,
}];

// Lav et array med de biler, der har netop 8 hjul.
let bilerMed8Hjul = biler.filter(bil => bil.antalHjul == 8);
for (let bil of bilerMed8Hjul) {
    console.log(bil);
}

// Lav et array med alle bilers nummerplader.
let nummerplader = biler.map(bil => bil.nummerplade);
for (let nummerplade of nummerplader) {
    console.log(nummerplade);
}

// Find den mindste vægt af alle bilerne.
let minVægt = biler.reduce((min, bil) => bil.vægt < min ? bil.vægt : min, biler[0].vægt);
console.log(minVægt);

// Lav et array med alle biler, der har størst antal hjul.
let bilerMedFlestHjul = biler.filter(bil => bil.antalHjul == biler.reduce((max, bil) => bil.antalHjul > max ? bil.antalHjul : max, biler[0].antalHjul));
for (let bil of bilerMedFlestHjul) {
    console.log(bil);
}

// Lav et array af objekter, der giver antal biler for hvert antal hjul, altså f.eks. 7 biler med 4 hjul, 4 biler med 6 hjul osv.
let antalBilerMedHjul = biler.reduce((acc, bil) => {
    let hjul = bil.antalHjul;
    if (acc[hjul] == undefined) {
        acc[hjul] = 1;
    } else {
        acc[hjul]++;
    }
    return acc;
}
, {});
for (let hjul in antalBilerMedHjul) {
    if (antalBilerMedHjul[hjul] > 1) {
    console.log(`${antalBilerMedHjul[hjul]} biler med ${hjul} hjul`);
    } else {
        console.log(`${antalBilerMedHjul[hjul]} bil med ${hjul} hjul`);
    }
}