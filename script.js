
document.addEventListener("click", runCode);

function runCode() {
    let h1El = document.getElementById("output")

    h1El.innerHTML = randomInt(0, 100);
    h1El.style.color = randomRGB();

    // let randFontDisplayEl = document.getElementById("random-font-display");

    // let fontDisplay = "";
    
    // if (randomFont === 0) {
    //     fontDisplay = "Arial";
    // } else if (randomFont === 1) {
    //     fontDisplay = "Times New Roman";
    // } else if (randomFont === 2) {
    //     fontDisplay = "Calibri";
    // }

    // randFontDisplayEl.style.font = fontDisplay;
}