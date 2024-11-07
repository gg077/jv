
function dagentussen(datum1, datum2){
    const tijdverschil = Math.abs(Date.parse(datum2) - Date.parse(datum1)); // parse zet in datum in mili second
    return tijdverschil / (1000 * 60 * 60 * 24)
}
console.log(dagentussen('2024-11-04', '1973-11-08'));

function jarenenmaanden(datum1, datum2){  //OEFENING NIET GELUKT
    const dagen = dagentussen(datum1, datum2)
    const maanden = Math.floor(dagen / 30.44);
    return maanden
}
console.log(jarenenmaanden(maanden))

// getal1 = parseInt(prompt("geef een getal"))
// getal2 = parseInt(prompt("geef een getal"))
// let totaal
// function vermenigvuldigencontroleer(a,b){
//     return a*b >100
// }
// console.log(vermenigvuldigencontroleer(getal1, getal2))


//
// let getal1 = parseInt(prompt("geef getal 1 weer"))
// let getal2 = parseInt(prompt("geef getal 2 weer"))
// let getal3 = parseInt(prompt("geef getal 3 weer"))
// function hoogste(a,b,c){
//     return Math.max(a,b,c)
// }
//
// console.log(hoogste(getal1, getal2, getal3));


// let mijnnaam = prompt("wat is je naam")
// function begroet(naam){
//     return `Hello ${naam}!`
// }
// console.log(begroet(mijnnaam));
//


// let testgetal = parseInt(prompt("geef een getal in"));
// function iseven(getal){
//     return getal % 2 === 0;
// }
// console.log(iseven(testgetal));



// let getala = parseInt(prompt("geef getal in"));
// let getalb = parseInt(prompt("geef getal in"))
// function vermenigvuldigen(getal1, getal2){
//     return getal1*getal2;
// }
//
// console.log(vermenigvuldigen(getala, getalb));
