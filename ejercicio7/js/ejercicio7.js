var password = document.getElementById("password")
var ayuda = document.getElementById("ayuda")

password.addEventListener("input", function () {

    if (password.value.length < 6 && password.value.length > 0) {
        ayuda.textContent = `Contraseña muy corta.`
        ayuda.style.color = "red"
    }
    else if (password.value.length >= 6 && password.value.length < 10) {
        ayuda.textContent = `Contraseña aceptable.`
        ayuda.style.color = "green"
    }
    else if (password.value.length >= 10) {
        ayuda.textContent = `Contraseña fuerte.`
        ayuda.style.color = "yellow"
    }
    else if (password.value.length == 0) {
        ayuda.textContent = ``
        ayuda.style.color = "green"
    }
})