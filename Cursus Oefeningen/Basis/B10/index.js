// 10. Schrijf een functie genereerWachtwoord(lengte)die een willekeurig
// wachtwoord van een opgegeven lengte genereert. Het wachtwoord moet uit
// hoofdletters, kleine letters, cijfers en speciale tekens bestaan.
// – Console Test: console.log(genereerWachtwoord(8)); // Verwachte
// Output: Bijvoorbeeld "a8$B1xQ!"

function genereerWachtwoord(lengte) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let result = '';

    // Genereer willekeurige tekens voor het opgegeven aantal
    for (let i = 0; i < lengte; i++) {
        result += characters[Math.floor(Math.random() * characters.length)];
    }

    // Geef het resultaat terug
    return result;
}

// Vraag de gebruiker om het aantal willekeurige tekens dat ze willen
console.log(genereerWachtwoord(8));  // Dit logt het wachtwoord van 8 tekens
