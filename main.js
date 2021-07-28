let car = prompt('Ingresá tu modelo de auto');
let year = prompt('Ingresá el año');
    console.log('El modelo de tu auto es: ' + car + ' ' + year);


if (year >= 2016) {
    console.log('Tu auto es nuevo');
}
else if (year > 2000){
    console.log('Tu auto es "viejo"');
}
else {
    console.log('Tu auto es bastante viejo');
}


const resultado = mensaje => console.log('El precio final de tu seguro es de: ', mensaje);

var price = prompt('Ingresa el valor de tu auto');

function calcularSeguro (price, year){
    let precioFinal = (price / year) * 15;
    return precioFinal;
}

let precioFinal = calcularSeguro(price, year);


resultado(precioFinal);


// Creacion de Clase
class Cliente {
    constructor (brand, model, year, price, owner, adress) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = parseFloat(price);
        this.owner = owner;
        this.adress = adress;
        this.contrato = false;
    }
    
    infoCliente() {
        return this.owner + " - " + this.adress;
    }

    contrata() {
        this.contrato = true;
    }  
}


// Instancio Clientes
let cliente1 = new Cliente (
    'Chevrolet', 
    'Celta', 
    '2012', 
    650000, 
    'Patricio Martinez',
    'Lima 435'
);

let cliente2 = new Cliente (
    'Volkswagen',
    'Gol',
    '2012',
    800000,
    'Uriel Martinez',
    'Pueyrredon 5612'
);

let cliente3 = new Cliente (
    'Fiat',
    'Argo',
    '2019',
    1600000,
    'Diego Perez',
    'Esteban de Luca 956'
);

let cliente4 = new Cliente (
    'Ford',
    'Fiesta',
    '2017',
    1000000,
    'Luciana Benitez',
    'Crovara 437'
);

// Array de Clientes
let arrayClientes = [cliente1, cliente2, cliente3, cliente4];


// Imprimo x Consola
console.log(arrayClientes[0].infoCliente());

let obj1 = {id: 1, name: prompt('Ingrese su nombre')};

let parrafo = document.createElement("p");
parrafo.innerHTML = `<h1> Calcula tu Seguro, ${obj1.name}.</h1>"`
document.body.appendChild(parrafo);