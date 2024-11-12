// Je gaat een applicatie bouwen waarmee gebruikers bestellingen kunnen toevoegen en beheren.
// Elke bestelling heeft een productnaam, klantnaam en status. De bestellingen worden geordend in categorieën op basis van hun status
// (bijvoorbeeld: "In afwachting", "In behandeling" en "Verzonden").
// Gebruikers kunnen tussen deze statuscategorieën schakelen met behulp van tabs.
// Elke keer dat er een nieuwe bestelling wordt toegevoegd, verschijnt er een toastmelding met details van de bestelling.

class bestelling {
    constructor(productnaam, klantnaam, status) {
        this.productnaam = productnaam
        this.klantnaam = klantnaam
        this.status = status
    }
}
document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault(); // tegenhouden van de pagina refresh

    // Haal de waarden op uit het formulier
    const productnaam = document.getElementById("productName").value;
    const klantnaam = document.getElementById("customerName").value;
    const status = document.getElementById("orderStatus").value;

    // Maak een nieuwe taak aan
    const nieuwebestelling = new bestelling(productnaam, klantnaam, status); // hoofdletter T en juiste naam

    // Bepaal de juiste lijst op basis van prioriteit
    let taakList;
    if (status === "Verzonden") {
        taakList = document.getElementById("shipped");
    } else if (status === "In behandeling") {
        taakList = document.getElementById("processing");
    } else if (status === "In afwachting") {
        taakList = document.getElementById("pending");
    }

    // Voeg de taak toe aan de lijst
    const taakItem = document.createElement("li");
    taakItem.classList.add("list-group-item");
    taakItem.textContent = `${nieuwebestelling.productnaam} - ${nieuwebestelling.klantnaam} - ${nieuwebestelling.status}`;
    taakList.appendChild(taakItem);

    // Formulier resetten na toevoegen
    document.getElementById("taakForm").reset();
});
