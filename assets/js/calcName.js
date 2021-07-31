// Creacion de elementos

let insertName = {id: 1, name: prompt('Ingrese su nombre')};
let calcName = document.createElement("div");
calcName.innerHTML = `<h1 class="container calcName">Cotizá tu seguro, <span> ${insertName.name}.<span></h1>
                      <p class="container calcP">No te encuentres con un precio sorpresivo. En <strong>Safer</strong> nuestros seguros son transparentes y claros.</p>`;
document.body.appendChild(calcName);
