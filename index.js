let marcador = document.getElementsByClassName("display")
let displayTime = document.getElementById("time-container")
let segundosTotales = 0
let count = [0, 0]

function btn1(numero) {
    count[numero] += 1 
    marcador[numero].textContent = count[numero]  
}

function btn2(numero) {
    count[numero] += 2
    marcador[numero].textContent = count[numero] 
}

function btn3(numero) {
    count[numero] += 3
    marcador[numero].textContent = count[numero] 
}

function reset() {
    count = [0,0]
    marcador[0].textContent = 0 
    marcador[1].textContent = 0
    segundosTotales = 0
    displayTime.textContent = "00:00:00"
}

function formatoTiempo(segundosTotales) {
    let horas = parseInt(segundosTotales / 3600)
    let minutos = parseInt((segundosTotales % 3600) / 60)
    let segundos = parseInt(segundosTotales % 60)

    let pad = (num) => String(num).padStart(2, "0")
    
    return pad(horas) + ":" + pad(minutos) + ":" + pad(segundos)
}

function contar() {
    segundosTotales += 1 
    displayTime.textContent = formatoTiempo(segundosTotales)
}

const contador = setInterval(contar, 1000)

console.log(15 % 4)