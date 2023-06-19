function square(x){
    return x * x;
}

function cube(x){
    return x * x * x;
}

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function power(a, b){
    return Math.pow(a, b);
}

function log(a){
    return Math.log(a);
}

function abs(a){
    return Math.abs(a);
}

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const compose2 = (...fns) => x => fns.reduce((v, f) => f(v), x);

let result = compose(square(2), sum(3)); // Beregner square(sum(2, 3))
console.log(result); // Resultat: 25

result = compose2(square(2), sum(3)); // Beregner sum(square(2, 3))
console.log(result); // Resultat: 5