var inputs = document.getElementById("input-area")
var area = document.getElementById("area")

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        area.textContent = `Nueva tarea: ${inputs.value}`
        inputs.value = ""
    }


})