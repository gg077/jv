// let persoon = "tom" // gewoone variable

let persoon = {
    naam: "tom",
    leeftijd:30,
    beroep:"developer",
}
// seal
Object.seal(persoon);
console.log(typeof(persoon))

// creeren en wijzigen van een object
persoon.naam = "tim";
console.log(persoon)

// deleten uit een object
delete persoon.beroep;
console.log(persoon);

// properties ophalen
console.log(Object.keys(persoon));

// properties tonen op scherm
console.log(persoon['naam']);
console.log(persoon[0]); // assosiatief index kan je niet met een ... gaan aanspreken = undefined

// values ophalen
console.log(Object.values(persoon));

//subarray (meerdimensioneel)
console.log(Object.entries(persoon));

// ik wil weten of dit een eigenschap is van een persoon
console.log(persoon.hasOwnProperty("naam"));
console.log(persoon.hasOwnProperty("kleurOgen"));

function Persoon(naam, leeftijd){
    this.naam = naam;
    this.leeftijd = leeftijd;
    console.log(this.naam)
}

let Amine = new Persoon
("amine", 30);
let Jonas = new Persoon
("jonas", 22);

// let Su = new persoon()
// let Fabio = new persoon()