// Verander de Tekst bij Mouseout
// – Oefening: Voeg een mouseout event toe aan een p-element dat “Bedankt voor
// je bezoek!” in de console logt wanneer de muis wordt weggehaald.
// – Console Test: console.log("Bedankt voor je bezoek!"); // Verwachte
// Output: Bedankt voor je bezoek!

// JavaScript voor mouseover event
document.getElementById("button").addEventListener("mouseover", function() {
    console.log("Bedankt voor je bezoek!"); // Logt het bericht naar de console
    document.textContent = "Bedankt voor je bezoek!";
});