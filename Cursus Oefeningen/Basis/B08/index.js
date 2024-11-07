// Schrijf een functie isPrime(n)die controleert of een getal een priemgetal is.
//     Retourneer trueals het een priemgetal is, anders false.
// – Console Test:
//     • console.log(isPrime(7)); // Verwachte Output: true
// • console.log(isPrime(10)); // Verwachte Output: false

function isPrime(n) {
    if (n < 2) {
        return false; // N is geen priemgetal
    }

    // Stap 2: Controleer of n deelbaar is door een getal tussen 2 en n-1
    for (let i = 2; i < n; i++) {
        if (n % i === 0) { // Als n deelbaar is door i (rest == 0)
            return false; // N is geen priemgetal, stop met controleren
        }
    }

    // Stap 3: Als geen delers gevonden zijn, is het getal een priemgetal
    return true;
}

// console.log(isPrime(7));
console.log(isPrime(10));