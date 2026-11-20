
function calcular() {
    var kilogramos = document.getElementById("kilogramos").value
    var textoimc = document.getElementById("textoimc")
    var metros = document.getElementById("metros").value
    if (kilogramos == "" || metros == "") {
        textoimc.style.color = "red"
        textoimc.textContent = `Por favor completa el campo`

    } else {
        var IMC = kilogramos / (metros * metros)
        if (IMC >= 17) {
            textoimc.style.color = "green"
            textoimc.textContent = `Tu IMC es: ${IMC}`
        }
        else if (IMC >= 20) {
            textoimc.style.color = "yellow"
            textoimc.textContent = `Tu IMC es: ${IMC}`
        }
        else {
            textoimc.style.color = "red"
            textoimc.textContent = `Tu IMC es: ${IMC}`
        }

    }
}