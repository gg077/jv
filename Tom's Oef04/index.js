
// Oefening 4
// We maken onze klaslijst. Vraag aan de gebruiker hoeveel namen hij wil ingeven en vul deze in een array.
//     Zorg ervoor dat je de namen onder elkaar afdrukt op de volgende manier.
//     Dirk
// Sam
// Luc
// Bob

let aantalNamen = parseInt(prompt("Hoeveel namen wil je invoeren?"));
let namen = [];
for (let i = 0; i < aantalNamen; i++) {
mijnnaam=prompt(`geef naam ${i} in`);
namen.push(mijnnaam);
}
console.log(namen)








// // Oefening 3
// // Je schrijft 3 arrays. De eerste 2 arrays vul je met een lus op met telkens 11 willekeurige in te lezen getallen.
// //     De derde array vul je vervolgens op met de de som van de waarden in arrays 1 en 2.
// // Weergave op het scherm (voorbeeld):
// // 3+2 = 5
// // 1+1 = 2
// // 2+100 = 102
// // 3+4 = 7
// // 900+4 = 904
//
// let array1 = [];
// let array2 = [];
// let arraySom = [];
//
// // Functie om een willekeurig geheel getal te genereren tussen 0 en max-1
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
//
// // Vul array1 en array2 met 11 willekeurige getallen tussen 0 en 1000
// for (let i = 0; i < 11; i++) {
//     array1.push(getRandomInt(1000)); // Voeg een willekeurig getal toe aan array1
//     array2.push(getRandomInt(1000)); // Voeg een willekeurig getal toe aan array2
// }
//
// // Vul arraySom met de som van de overeenkomstige waarden van array1 en array2
// for (let i = 0; i < array1.length; i++) {
//     let som = array1[i] + array2[i]; // Bereken de som van de getallen op dezelfde positie
//     arraySom.push(som); // Voeg de som toe aan arraySom
// }
//
// // Weergave van het resultaat
// for (let i = 0; i < arraySom.length; i++) {
//     console.log(`${array1[i]} + ${array2[i]} = ${arraySom[i]}`);
// }
//
//







//
// // Oefening 2
// // Je schrijft 3 arrays. De eerste 2 arrays vul je met een lus op met waarden van 0 tem 10.
// // De derde array vul je vervolgens op met de de som van de waarden in arrays 1 en 2.
// // Weergave op het scherm:
// // 1+1 = 2
// // 2+2 = 4
// // 3+3 = 6
// // 4+4 = 8
// // …
//
//
// // Maak de eerste en tweede arrays
// let array1 = [];
// let array2 = [];
// let arraySom = [];
//
// // Vul de eerste en tweede arrays met waarden van 0 tot 10
// for (let i = 0; i <= 10; i++) {
//     array1.push(i);
//     array2.push(i); // Voor de oefening gebruiken we hier dezelfde waarden, maar je kunt ook andere waarden gebruiken
// }
//
// // Vul de derde array met de som van de waarden in array1 en array2
// for (let i = 0; i < array1.length; i++) {
//     let som = array1[i] + array2[i]; // Bereken de som
//     arraySom.push(som); // Voeg de som toe aan arraySom
// }
//
// // Weergave op het scherm
// for (let i = 0; i < arraySom.length; i++) {
//     console.log(`${array1[i]} + ${array2[i]} = ${arraySom[i]}`);
// }





// let aantalNamen = parseInt(prompt("Hoeveel namen wil je invoeren?"));
// let namen = [];
// for (let i = 0; i < aantalNamen; i++) {
//     mijnnaam=prompt(`geef naam ${i} in`);
//     namen.push(mijnnaam);
// }
// namen.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
//
// console.log(namen)
// console.log(namen.sort().reverse());

// let namen = ["jan", "piet", "klaas"]
//
// console.log(namen[1])
// console.log(namen.push("ara"));
// console.log(namen[3]);
// console.log(namen);
// console.log(namen.push("Tom"));
// console.log(namen);
// console.log(namen.pop())
// console.log(namen);
// console.log(namen.shift());
// console.log(namen);
// console.log(namen.unshift("jonas", "dieter"))
// console.log(namen);
// console.log(namen.length);
//
// namen.forEach(naam => console.log(naam)); // output altijd string
//
// let getallen = [1,2,3];
// let verdubbeld = getallen.map(getal => getal *2); // output altijd terug een array
// console.log(verdubbeld);
//
// let numbers = [1,2,3,4,5]
// let evengetallen = numbers.filter(getal => getal % 2 === 0);
// console.log(evengetallen)
//
// let nieuwenummers = [1,2,3,4];
// let eerstegroterdantwee = nieuwenummers.find(getal => getal > 2);
// console.log(eerstegroterdantwee);
//
// let index = nieuwenummers.findIndex(getal => getal > 2);
// console.log(index)
//
// let fruits = ["appel", "banaan", "peer", "kiwi", "kersen"]
// let sommigefruits = fruits.slice(1,3);
// console.log(sommigefruits);
//
// let tvfruits = fruits.splice(1,1,"druiven");
// console.log(tvfruits);
//
// let newnumbers = [1,2,3,4];
// let som = newnumbers.reduce((acc, num) => acc + num, 1)
// console.log(som);


// function dagentussen(datum1, datum2){
//     const tijdverschil = Math.abs(Date.parse(datum2) - Date.parse(datum1)); // parse zet in datum in mili second
//     return tijdverschil / (1000 * 60 * 60 * 24)
// }
// console.log(dagentussen('2024-11-04', '1973-11-08'));
//
// function jarenenmaanden(datum1, datum2){  //OEFENING NIET GELUKT
//     const dagen = dagentussen(datum1, datum2)
//     const maanden = Math.floor(dagen / 30.44);
//     return maanden
// }
// console.log(jarenenmaanden(maanden))

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
