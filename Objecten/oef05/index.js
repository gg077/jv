// Klasse Voertuig
class Voertuig {
    constructor(model, bouwjaar) {
        this.model = model;
        this.bouwjaar = bouwjaar;
    }

    rijden() {
        return `${this.model} is aan het rijden.`;
    }

    starten() {
        return `${this.model} is gestart.`;
    }

    stoppen() {
        return `${this.model} is gestopt.`;
    }
}

// Klasse Auto die overerft van Voertuig
class Auto extends Voertuig {
    constructor(model, bouwjaar, type, versnelling, aandrijving) {
        super(model, bouwjaar);
        this.type = type;
        this.versnelling = versnelling;
        this.aandrijving = aandrijving;
    }

    beschrijf() {
        return `Model: ${this.model}, Bouwjaar: ${this.bouwjaar}, Type: ${this.type}, Versnelling: ${this.versnelling}, Aandrijving: ${this.aandrijving}`;
    }
}

let garageCapacity = 0;  // Houdt de capaciteit van de garage bij
let autoCount = 0;  // Houdt het aantal auto's bij

// Functie om de progress bar bij te werken
function updateProgressBar() {
    const progressBar = document.getElementById("progressBar");

    // Bereken het percentage van de voortgang
    let percentage = (autoCount / garageCapacity) * 100;

    // Update de progress bar
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuenow", percentage);
    progressBar.textContent = `${percentage.toFixed(0)}%`;  // Toon het percentage
}

// Event listener voor het garage instellen
document.getElementById("garageForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Voorkom de pagina-refresh

    // Haal de waarde van de garagegrootte op
    garageCapacity = parseInt(document.getElementById("garageSize").value);

    if (isNaN(garageCapacity) || garageCapacity <= 0) {
        alert("Voer een geldig aantal auto's in voor de garage.");
        return;
    }

    // Stel de max waarde van de progress bar in op de garage capaciteit
    const progressBar = document.getElementById("progressBar");
    progressBar.setAttribute("aria-valuemax", garageCapacity);

    alert(`De garage is ingesteld voor ${garageCapacity} auto's.`);
});

// Event listener voor het formulier om auto's toe te voegen
document.getElementById("autoForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Voorkom de pagina-refresh

    // Haal de waarden van de auto op
    const model = document.getElementById("model").value;
    const bouwjaar = document.getElementById("bouwjaar").value;
    const type = document.getElementById("type").value;
    const versnelling = document.getElementById("versnelling").value;
    const aandrijving = document.getElementById("aandrijving").value;

    // Maak een nieuwe auto aan
    const nieuweAuto = new Auto(model, bouwjaar, type, versnelling, aandrijving);

    // Voeg de auto toe aan de lijst
    const autoList = document.getElementById("autoList");
    const autoItem = document.createElement("li");
    autoItem.classList.add("list-group-item");
    autoItem.textContent = nieuweAuto.beschrijf();
    autoList.appendChild(autoItem);

    // Verhoog het aantal auto's in de garage
    autoCount++;

    // Update de progress bar
    updateProgressBar();

    // Controleer of de garage vol is
    if (autoCount >= garageCapacity) {
        alert("De garage is vol!");
    }

    // Formulier resetten na toevoegen
    document.getElementById("autoForm").reset();
});
