
const formulario = document.getElementById("form");
const btnSubmit = document.getElementById("btnEnviar");
const obtenerDatos = document.getElementById("datosForm");
const nameInput = document.getElementById("formName");
const carInput = document.getElementById("formCar");
const yearInput = document.getElementById("formYear");
const valueInput = document.getElementById("formValue");


formulario.onsubmit = function enviarDatos(e) {
    e.preventDefault();
    
    const datos = document.createElement('div');

    datos.className = "container datosIngresados";

    datos.innerHTML =
    `<p><span><strong>${nameInput.value}</strong></span>, a continuación te detallamos el valor de tu seguro:</p>
    <p>• Su modelo: <strong>${carInput.value}</strong> </p>
    <p>• El año de su vehiculo: <strong>${yearInput.value}</strong> </p>
    <p>• El valor de su vehiculo: <strong>$ ${valueInput.value}</strong> </p>
    <p>• El valor de su seguro es de: <strong>$ ${Number.parseInt((valueInput.value / yearInput.value))* 15}</strong>`;

    obtenerDatos.appendChild(datos);
    
    localStorage.setItem('Cliente:', nameInput.value);
    localStorage.setItem('Auto del Cliente:', carInput.value);
    localStorage.setItem('Año del auto del Cliente:', yearInput.value);
    localStorage.setItem('Valor del Vehiculo:', valueInput.value);
    localStorage.setItem('Valor del Seguro:', Number.parseInt((valueInput.value / yearInput.value))* 15); 
};