var select = document.getElementById("select")
var tarjeta = document.getElementById("tarjeta")

select.addEventListener("change", function () {

    if (select.value == "blue") {
        tarjeta.style.backgroundColor = "blue"
    }
    else if (select.value == "green") {
        tarjeta.style.backgroundColor = "green"
    }
    else if (select.value == "yellow") {
        tarjeta.style.backgroundColor = "yellow"
    }
    else if (select.value == "pink") {
        tarjeta.style.backgroundColor = "pink"
    }
    else {
        tarjeta.style.backgroundColor = "white"
    }
})