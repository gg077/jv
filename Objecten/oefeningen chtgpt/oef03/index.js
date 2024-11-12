// Taak-klasse
class Taak {
    constructor(beschrijving, prioriteit) {
        this.beschrijving = beschrijving;
        this.prioriteit = prioriteit;
    }
}

// Event listener voor het formulier
document.getElementById("taakForm").addEventListener("submit", function (event) {
    event.preventDefault(); // tegenhouden van de pagina refresh

    // Haal de waarden op uit het formulier
    const taakbeschrijving = document.getElementById("beschrijving").value;
    const prioriteit = document.getElementById("prioriteit").value;

    // Maak een nieuwe taak aan
    const nieuweTaak = new Taak(taakbeschrijving, prioriteit); // hoofdletter T en juiste naam

    // Bepaal de juiste lijst op basis van prioriteit
    let taakList;
    if (prioriteit === "laag") {
        taakList = document.getElementById("laagList");
    } else if (prioriteit === "middel") {
        taakList = document.getElementById("middelList");
    } else if (prioriteit === "hoog") {
        taakList = document.getElementById("hoogList");
    }

    // Voeg de taak toe aan de lijst
    const taakItem = document.createElement("li");
    taakItem.classList.add("list-group-item");
    taakItem.textContent = nieuweTaak.beschrijving;
    taakList.appendChild(taakItem);

    // Formulier resetten na toevoegen
    document.getElementById("taakForm").reset();
});
