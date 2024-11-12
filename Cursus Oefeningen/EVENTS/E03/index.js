// !
//     3. Toon een Bericht bij Mouseover
// – Oefening: Voeg een mouseover event toe aan een tekst die “Je beweegt over
// de tekst!” in de console logt.
// – Console Test: console.log("Je beweegt over de tekst!"); //
// Verwachte Output: Je beweegt over de tekst!
//     Middelmatig



// JavaScript voor mouseover event
document.getElementById("button").addEventListener("mouseover", function() {
    console.log("Je beweegt over de tekst!"); // Logt het bericht naar de console
    document.textContent = "Je beweegt over de tekst!";
});

// // Selecteer het element met de id "button"
// let knopElement = document.getElementById("button");
//
// // Voeg een mouseover event toe aan het element
// knopElement.addEventListener("mouseover", function() {
//     // Log een bericht naar de console wanneer de muis over de knop beweegt
//     console.log("Je beweegt over de knop!");
// });
