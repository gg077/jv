let aantalNamen = parseInt(prompt("Hoeveel namen wil je invoeren?"));
let namen = [];
for (let i = 0; i < aantalNamen; i++) {
    mijnnaam=prompt(`geef naam ${i} in`);
    namen.push(mijnnaam);
}
namen.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(namen)
console.log(namen.sort().reverse());

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
