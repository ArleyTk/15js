// is-valid
// is-invalid
let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let edad = document.getElementById("edad")
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")

function registrar() {

    p4.textContent = ""
    if (nombre.value.length < 1) {
        p1.style.color = "red"
        p1.textContent = `No puede dejar espacios en blanco`
        nombre.classList.add('is-invalid');
        nombre.classList.remove('is-valid');

    } else if (nombre.value.length > 0) {
        p1.textContent = ``
        nombre.classList.add('is-valid');
        nombre.classList.remove('is-invalid');
    }

    if (correo.value.length < 1) {
        p2.textContent = `No puede dejar espacios en blanco`
        correo.classList.add('is-invalid');
        correo.classList.remove('is-valid');
        p2.style.color = "red"
    } else if (!correo.value.includes("@")) {
        p2.textContent = `El correo debe de llevar "@"`
        correo.classList.add('is-invalid');
        correo.classList.remove('is-valid');
        p2.style.color = "red"
    }

    else if (correo.value.length > 0) {
        p2.textContent = ``
        correo.classList.add('is-valid');
        correo.classList.remove('is-invalid');




    } if (edad.value < 1) {
        p3.style.color = "red"
        p3.textContent = `Su edad debe de ser válida`
        edad.classList.add('is-invalid');
        edad.classList.remove('is-valid');

    } if (edad.value.length < 1) {
        p3.style.color = "red"
        p3.textContent = `No puede dejar espacios en blanco`
        edad.classList.add('is-invalid');
        edad.classList.remove('is-valid');
    }

    else if (edad.value > 0) {
        p3.textContent = ``
        edad.classList.add('is-valid');
        edad.classList.remove('is-invalid');
    }

    if (edad.classList.contains("is-valid") &&
        nombre.classList.contains("is-valid") &&
        correo.classList.contains("is-valid")
    ) {
        p4.textContent = "Bienvenido"
        p4.style.color = "green"
    }


}