// Prueba
const formulario = document.getElementById("form");
const btnSubmit = document.getElementById("btnCargar");
const obtenerDatos = document.getElementById("datosForm");

function enviarDatos() {
    const carInput = document.getElementById("formCar");
    const yearInput = document.getElementById("formYear");
    const valueInput = document.getElementById("formValue");

    const datos = document.getElementById('div');

    datos.className = "container datosIngresados";

    datos.innerHTML =
    `<p> Su modelo: <strong>${carInput.value}</strong> </p>
    <p> El año de su vehiculo: <strong>${yearInput.value}</strong> </p>
    <p> El valor de su vehiculo: <strong>${valueInput.value}</strong> </p>
    <p> El valor de su seguro es de: <strong>${(valueInput.value / yearInput.value) * 15}</strong>`;

    obtenerDatos.appendChild(datos);
};

btnSubmit.onsubmit = (event) => {
    event.preventDefault();
    enviarDatos();
};