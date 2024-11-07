// 9. Schrijf een functie telWoorden(zin)die het aantal woorden in een zin telt en
// het resultaat retourneert.
// – Console Test: console.log(telWoorden("Dit is een voorbeeldzin."));
// // Verwachte Output: 4

function telWoorden(zin){
    return zin.split(' ').length; // dus je split alle woorden appart door de spaties en door de length word elke index weergegeven en opgeteld
}
console.log(telWoorden("Dit is een voorbeeldzin."));