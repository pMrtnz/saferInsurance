//Creacion de Elementos

let insertCar = {id: 1, model: prompt('Ingresá el modelo de tu auto'), year: prompt('Ingresá el año'), value: prompt('Ingresa el valor de tu auto')};

let segResult = document.createElement("div");
segResult.innerHTML = 
    `<p class="container datosIngresados"> Su modelo: <strong>${insertCar.model}</strong> </p>
     <p class="container datosIngresados"> El año de su vehiculo: <strong>${insertCar.year}</strong> </p>
     <p class="container datosIngresados"> El valor de su vehiculo: <strong>${insertCar.value}</strong> </p>
     <p class="container datosIngresados"> El valor de su seguro es de: <strong>${(insertCar.value / insertCar.year) * 15}</strong>`;

document.body.appendChild(segResult);
