// Maak een Boek-klasse met eigenschappen zoals titel, auteur, jaar, en genre.
//     Voeg een formulier toe om boeken toe te voegen, en toon de lijst van boeken op de pagina.
//     Beperk het aantal boeken in de bibliotheek tot een maximum aantal en toon een waarschuwing wanneer de limiet is bereikt.
//     Voeg een functionaliteit toe om een boek uit de lijst te verwijderen.
//     Hints:
//
// Gebruik een array om alle boeken op te slaan.
//     Gebruik een beschrijf-methode in de Boek-klasse om de details van elk boek weer te geven.


// Klasse Voertuig
class taak {
    constructor(taakbeschrijving, prioriteit, deadline) {
        this.taakbeschrijving = taakbeschrijving;
        this.prioriteit = prioriteit;
        this.deadline = deadline;
    }
    beschrijf() {
        return `taakbeschrijving: ${this.taakbeschrijving}, prioriteit: ${this.prioriteit}, deadline: ${this.deadline}`;
    }
}


// Event listener voor het formulier
document.getElementById("taakForm").addEventListener("submit", function (event) {
    event.preventDefault();//tegenhouden van de pagina refresh

    // Haal de waarden op uit het formulier
    const taakbeschrijving = document.getElementById("beschrijving").value;
    const prioriteit = document.getElementById("prioriteit").value;
    const deadline = document.getElementById("deadline").value;


    // Maak een nieuwe auto aan
    const nieuwetaak = new taak(taakbeschrijving, prioriteit, deadline);

    // Voeg de auto toe aan de lijst
    const booklist = document.getElementById("taakList");
    const autoItem = document.createElement("li");
    autoItem.classList.add("list-group-item");
    autoItem.textContent = nieuwetaak.beschrijf();
    booklist.appendChild(autoItem);

    // Formulier resetten na toevoegen
    document.getElementById("taakForm").reset();
});