// Schrijf een functie keerOm(tekst)die een string omkeert en de omgekeerde
// string retourneert.
// – Console Test: console.log(keerOm("JavaScript")); // Verwachte
// Output: "tpircSavaJ

function keerOm(tekst) {
    return tekst.split('').reverse().join('');
}

console.log(keerOm("JavaScript"));