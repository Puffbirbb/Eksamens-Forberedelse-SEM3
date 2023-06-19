// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) { return this.navn == p.navn; }
    compare(p) { return this.navn.localeCompare(p.navn); }
}
class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) { return super.equals(s) && this.id == s.id; }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let liste = [p1, p2, s1, s2];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

function compare(p1, p2) {
    if (p1.navn < p2.navn) return -1;
    if (p1.navn > p2.navn) return 1;
    return 0;
};

liste.sort(compare);

for (let p of liste) console.log(p.toString());

let k1 = new Kat("Misser");
let k2 = new Kat("Mister");

liste.push(k1, k2);

liste.sort(compare);

for (let p of liste) console.log(p.toString());