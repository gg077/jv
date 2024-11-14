function maakRandomGetal(digitsMin, digitsMax){
    //hoe laat ik nu de computer random digitsmin of digitsmax kiezen?
    let aantalDigits = Math.floor(Math.random() * (parseInt(digitsMax) - parseInt(digitsMin) + 1)) + parseInt(digitsMin);
    eenRandomGetal = Math.floor(Math.random()* (10**parseInt(aantalDigits)));
    return eenRandomGetal;
}
function maakSom(){

}

document.getElementById('toevoegen').addEventListener('click', function (){
    let antlnr = document.getElementById('numQuestions').value;
    antlnr = parseInt(antlnr); // Zorg ervoor dat het een getal is
    for (let i =0;i < antlnr ;i++){


    let digitsMin = document.getElementById('digits-min').value;
    let digitsMax = document.getElementById('digits-max').value;
    let getal1 = maakRandomGetal(digitsMin,digitsMax);
    let getal2 = maakRandomGetal(digitsMin,digitsMax);

        let myDiv = document.createElement('div');
        myDiv.classList.add("card", "my-8");

        // Maak een <p> tag met de som
        let ptag = document.createElement('p');
        ptag.classList.add("m-0");  // Optional: add margin 0 to ptag for styling
        let ptagtekst = `${getal1} + ${getal2} = `;

        // Voeg een inputveld toe om het antwoord in te voeren
        let input = document.createElement('input');
        input.type = 'number';  // Type input is nummer
        input.placeholder = "Antwoord";  // Placeholder voor het invoerveld
        input.classList.add('antwoord');  // Voeg een klasse toe voor styling
        input.classList.add('d-flex', 'justify-content-end')

        // Voeg de tekst en het invoerveld toe aan de paragraaf
        ptag.textContent = ptagtekst;
        ptag.appendChild(input);

        // Voeg de <p> tag toe aan de card (myDiv)
        myDiv.appendChild(ptag);

        // Voeg de card toe aan de container
        document.getElementById('exercise-container').appendChild(myDiv);
    }
    console.log(getal1);
    console.log(getal2);
});