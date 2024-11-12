// Maak een Boek-klasse met eigenschappen zoals titel, auteur, jaar, en genre.
//     Voeg een formulier toe om boeken toe te voegen, en toon de lijst van boeken op de pagina.
//     Beperk het aantal boeken in de bibliotheek tot een maximum aantal en toon een waarschuwing wanneer de limiet is bereikt.
//     Voeg een functionaliteit toe om een boek uit de lijst te verwijderen.
//     Hints:
//
// Gebruik een array om alle boeken op te slaan.
//     Gebruik een beschrijf-methode in de Boek-klasse om de details van elk boek weer te geven.


// Klasse Voertuig
class boek {
    constructor(titel, auteur, jaar, genre) {
        this.titel = titel;
        this.auteur = auteur;
        this.jaar = jaar;
        this.genre = genre;
    }
    beschrijf() {
        return `Titel: ${this.titel}, auteur: ${this.auteur}, jaar: ${this.jaar}, genre: ${this.genre}`;
    }
}


// Event listener voor het formulier
document.getElementById("bookForm").addEventListener("submit", function (event) {
    event.preventDefault();//tegenhouden van de pagina refresh

    // Haal de waarden op uit het formulier
    const titel = document.getElementById("title").value;
    const auteur = document.getElementById("author").value;
    const jaar = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;

    // Maak een nieuwe auto aan
    const nieuweboek = new boek(titel, auteur, jaar, genre);

    // Voeg de auto toe aan de lijst
    const booklist = document.getElementById("bookList");
    const autoItem = document.createElement("li");
    autoItem.classList.add("list-group-item");
    autoItem.textContent = nieuweboek.beschrijf();
    booklist.appendChild(autoItem);

    // Formulier resetten na toevoegen
    document.getElementById("bookForm").reset();
});