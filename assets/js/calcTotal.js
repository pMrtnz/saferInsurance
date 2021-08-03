// Prueba
const formulario = document.getElementById("form");
const btnSubmit = document.getElementById("btnCargar");

function enviarDatos() {
    const carInput = document.getElementById("formCar").value;
    const yearInput = document.getElementById("formYear").value;
    const valueInput = document.getElementById("formValue").value;

    const datos = document.createElement('div');

    datos.className = "container datosIngresados";

    datos.innerHTML =
    `<p> Su modelo: <strong>${carInput}</strong> </p>
    <p> El año de su vehiculo: <strong>${yearInput}</strong> </p>
    <p> El valor de su vehiculo: <strong>${valueInput}</strong> </p>
    <p> El valor de su seguro es de: <strong>${(valueInput / yearInput) * 15}</strong>`;

    document.btnCargar.appendChild(datos);
};

btnSubmit.onsubmit = (event) => {
    event.preventDefault();
    enviarDatos();
};

console.log(btnSubmit);