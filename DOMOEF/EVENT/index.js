let btn = document.getElementById("button")
function getrandomrgbcolor(){
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`;  // Backticks -> werkt wel
}
btn.addEventListener("click", function (event){
    event.preventDefault();
    document.body.style.backgroundColor= getrandomrgbcolor();
})

