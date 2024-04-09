// ejercicio 2
let form = document.getElementById("form");
let textInput = document.getElementById("input");
let boton = document.getElementById("boton")
let colorInput = document.getElementById("color");

let wallSection = document.getElementById("wall-section");
let nodoSpan = document.getElementById("nodoSpan");
let posterStyle = document.getElementById("Poster");
let graffitiStyle = document.getElementById("Graffiti");
let newDiv;

function clearDiv() {
    output.removeChild(output.firstChild);
} // still without calling

function createPoster(nodo, color) {
    newDiv = document.createElement("div");
    newDiv.classList.add("border", "border-black", "border-solid", "h-[300px]", "w-[300px]", "m-4", "rounded-md", "relative", `bg-[${color}]`);
    newDiv.appendChild(nodo);
    return newDiv;
}

function createText(texto) {
    let auxP = document.createElement("p");
    auxP.className = "overflow-x-auto text-4xl m-4 font-bold text-yellow-100 w-[70%] h-[85%]";
    auxP.innerText = texto;
    return auxP;
}

function createSpan(nodoPadre) {
    let divCloser = document.createElement("span");
    divCloser.innerText = "X";
    divCloser.id = "nodoSpan";
    divCloser.className = "text-5xl m-8 font-bold text-yellow-100 border-yellow border border-solid absolute -top-6 -right-6 p-2"
    nodoPadre.appendChild(divCloser);

    divCloser.addEventListener("click", () => {
        // wallSection.removeChild(event.target.)})
        nodoPadre.remove();
    })

    return divCloser;
}

form.addEventListener("submit", event => {
    event.preventDefault();
    let inputValue = textInput.value;
    let selectedColor = colorInput.value;
    let nodoTexto = createText(inputValue);
    let nodoPoster = createPoster(nodoTexto, selectedColor);
    let nodoSpan = createSpan(nodoPoster);
    wallSection.appendChild(nodoPoster);
})

// 
posterStyle.addEventListener("change", () => {
    if (posterStyle.checked) {
        newDiv.style.fontFamily = "Roboto Black";
        // probar con toggle
        newDiv.classList.toggle("font-serif", true);
    } else if (graffitiStyle.checked) {
        newDiv.style.fontFamily = "Roboto Black";
    }
})


