contador = 0
function sumar() {
    let numero = document.getElementById("numero")

    contador++
    numero.textContent = `${contador}`

    if (contador === 10) {
        numero.style.color = "green";
    } else {
        numero.style.color = "";
    }
}

function reiniciar() {
    contador = 0
    let numero = document.getElementById("numero").textContent = contador
}