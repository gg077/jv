// Schrijf een functie factorial(n)die het faculteit van nberekent. Het faculteit
// van een getal nis het product van alle positieve gehele getallen kleiner dan of
// gelijk aan n.
// – Console Test: console.log(factorial(5)); // Verwachte Output: 120

function factorial(n) {
    let resultaat = 1; // Begin met 1 omdat alles vermenigvuldigd met 1 nog steeds hetzelfde blijft.

    // Loop van 1 tot n en vermenigvuldig de getallen.
    for (let i = 1; i <= n; i++) {
        resultaat *= i; // Vermenigvuldig het resultaat met i Dit betekent: "Verander het resultaat door het te vermenigvuldigen met i".
        // In het begin is resultaat gelijk aan 1. Dus:
        // In de eerste herhaling wordt 1 vermenigvuldigd met 1 (dat blijft 1).
        // In de tweede herhaling wordt 1 vermenigvuldigd met 2 (dat wordt 2).
        // In de derde herhaling wordt 2 vermenigvuldigd met 3 (dat wordt 6).
        // En zo gaat het verder, totdat de loop klaar is.
    }

    return resultaat; // Retourneer het eindresultaat
}

// Test de functie
console.log(factorial(5)); // Verwachte output: 120
