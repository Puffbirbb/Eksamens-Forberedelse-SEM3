class Bil {
    static antal = 0;
    constructor(pris, mærke) {
        if (typeof pris != "number" || typeof mærke != "string"){
            throw new Error("Bil er ikke gyldig.");
        }
        this.pris = pris;
        this.maerke = mærke;
        Bil.antal++;
    }

    toString() {
        return `${this.maerke} koster ${this.pris} kr.`;
    }
}

class Varevogn extends Bil {
    constructor(pris, mærke, lasteevene) {
        if (typeof lasteevene != "number"){
            throw new Error("Varevogn er ikke gyldig.");
        }
        super(pris, mærke);
        this.lasteevne = lasteevene;
    }
}

let biler = [];

for (let i = 0; i < 10; i++) {
    let bil = new Bil(100000, "Ford");
    biler.push(bil);
}

getAntalBiler = () => Bil.antal;

for (let bil of biler){
    console.log(bil.toString());
}