function gætTalISyttenTabellen(resolve, reject) {
    setTimeout(function() {
        let tal = Math.floor(Math.random() * 2000) + 1;
        if (tal % 17 == 0) {
            resolve(tal);
        } else {
            reject(tal);
        }
    } , Math.floor(Math.random() * (4 - 1)) + 1);
};

let promise = new Promise(gætTalISyttenTabellen);

promise.then(
    function(tal) {
        console.log(`Tillykke! Du gættede tallet ${tal}.`);
    }
).catch(
    function(tal) {
        console.log(`Desværre! Du gættede tallet ${tal}.`);
    }
);

function prøvXGange(antalGæt) {
    for (let i = 0; i < antalGæt; i++) {
        let newPromise = new Promise(gætTalISyttenTabellen);
        newPromise.then(
            function(tal) {
                console.log(`Tillykke! Du gættede tallet ${tal}.`);
            }
        ).catch(
            function(tal) {
                console.log(`Desværre! Du gættede tallet ${tal}.`);
            }
        );
    }
}

prøvXGange(5);