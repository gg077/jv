let knop = document.getElementById("klikmij");
knop.addEventListener("click", function (){
    alert("je hebt op mij geklikt!");
    document.body.style.backgroundColor="blue"
    knop.textContent="ik ben aangeklikt"
})
let form = document.getElementById("mijnform");
form.addEventListener("submit", function (event){
    event.preventDefault(); // hiermee vermijd je het herladen van de pagina = refresh komt niet meer
    let naam = document.getElementById("naaminput").value;
    console.log("naam:", naam)
    document.getElementById("naaminput").value="";
});

document.addEventListener("keydown", function (event){
    console.log("toets ingedrukt", event.key);
})