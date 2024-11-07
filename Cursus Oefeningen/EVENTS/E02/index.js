// Voeg een Click Event toe aan een Knop om een Bericht weer te geven
// – Oefening: Maak een knop en voeg een click event toe die “Knop is geklikt!” in
// de console logt.
// – Console Test: console.log("Knop is geklikt!"); // Verwachte
// Output: Knop is geklikt!

// Maak een knop aan met JavaScript
let knop = document.getElementById("button");
knop.addEventListener("click", function() {
    knop.textContent = "Je hebt me aangeklikt!";
});
