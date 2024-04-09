// ejercicio 1
const cambiarbtn = document.getElementById("cambiar");
const cuadro = document.getElementById("ejercicio1");
contador = 0;

cambiarbtn.addEventListener("click", () => {
contador++;
if (contador % 2 === 0) {
    cuadro.classList.toggle("bg-red-400");
} else {
    cuadro.classList.toggle("bg-cyan-400");
}
console.log(contador);
});

// ejercicio 2
const cambiarbtn2 = document.getElementById('cambiar2')
const cuadrado = document.getElementById('ejercicio2')
const inputext2 = document.getElementById('texto')

inputext2.addEventListener('keydown',(event)=>{
if(event.key === 'Enter'){
    const texto2 = inputext2.value
const textoIngresado = document.createElement('p')
textoIngresado.textContent = texto2
cuadrado.appendChild(textoIngresado)
inputext2.value = ""
}
})

cambiarbtn2.addEventListener('click',()=>{
cuadrado.textContent = ""
})

//Ejercicio 3

const estatura = document.getElementById('estatura')
const peso = document.getElementById('peso')
const resultado = document.getElementById('resultado')
const cambiarbtn3 = document.getElementById('cambiar3')

cambiarbtn3.addEventListener('click',()=>{
const pesoValor = Number(peso.value)
const estaturaValor = Number(estatura.value)
const masaCorporal = (pesoValor / ((estaturaValor*estaturaValor)/100))*100
console.log(masaCorporal)
resultado.value = masaCorporal
})
// Ejercicio 4

const pesos = document.getElementById('monedaLocal')
const dolares = document.getElementById('dolar')
const calcular = document.getElementById('calcularMoneda')
const limpiar = document.getElementById('limpiarMoneda')

pesos.addEventListener('keydown', (event)=>{
const moneda = Number(pesos.value)
const convertir = Number(dolares.value)
console.log(moneda)
if (event.key ==='Enter' && pesos.value > 0){
    const conversion = moneda / 500
    dolares.value = conversion
}
})

dolares.addEventListener('keydown',(event)=>{
const moneda = Number(pesos.value)
const convertir = Number(dolares.value)
if(event.key ==='Enter' && dolares.value > 0){
    const deconversion = convertir * 500
    pesos.value = deconversion
}
})

calcular.addEventListener('click',()=>{
const moneda = Number(pesos.value)
const convertir = Number(dolares.value)
    if(dolares.value > 0){
      const deconversion = convertir * 500
    pesos.value = deconversion
    }else if (pesos.value > 0){
    const conversion = moneda / 500
    dolares.value = conversion
    }
})

limpiar.addEventListener('click',()=>{
dolares.value = ""
pesos.value =""
})