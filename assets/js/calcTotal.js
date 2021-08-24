$(document).ready(function(){

    //Selecciono los elementos
    const form = $('#form');
    const inputName = $('#formName');
    const inputCar = $('#formCar');
    const inputYear = $('#formYear');
    const inputValue = $('#formValue');
    const insureTotal = (inputValue/inputYear);

    //Creacion del objeto
    function Client (name, car, year, value) {
        this.name = name;
        this.car = car;
        this.year = year;
        this.value = value;
    };

    let listClient = [];

    if (localStorage.getItem('clients')) {
        listClient = JSON.parse(localStorage.getItem('clients'));
    };

    function saveInStorage(key, clients) {
        listClient.push(clients);
        localStorage.setItem(key, JSON.stringify(listClient));
    };

    function getClientFromStorage(key) {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key));
        }
    }


    form.submit(function(event) {
        event.preventDefault();

        //Valores ingresados por el usuario
        const name = inputName.val();
        const car = inputCar.val();
        const year = inputYear.val();
        const value = inputValue.val();
        
        
        const user = new Client(name, car, year, value);

        saveInStorage('clients', user);


        if(name, car, year, value == ''){
            $("#datosForm").append(`
            <div class="alert alert-danger text-center datosIngresados" role="alert" data-aos="fade-up">
                <p>¡No completaste todos los campos del formulario!</p>
            </div>
            `)
        }
        else{
            $("#datosForm").append(`
            <div class="datosIngresados" data-aos="fade-down" data-aos-duration="1000">
                <p><span><strong>${user.name}</strong></span>, a continuación te detallamos el valor de tu seguro:</p>
                <p>El valor que aparecera a continuacion es el que corresponde a nuestro plan <strong>Estándar</strong>. Podrá consultar el valor de nuestros otros planes en base a su vehiculo, en la seccion de "Planes".</p>
                <div class="wrapper">
                    <div class="divider div-transparent div-dot"></div>
                </div>
                <p class="resultadoForm">Su modelo: <strong>${user.car}</strong></p>
                <p class="mt-5">El año de su vehiculo: <strong>${user.year}</strong></p>
                <p class="mt-5">El valor final su seguro será de: <span class="totalFont"><strong>$ ${Number.parseInt((user.value / user.year))* 15}</strong></span>
            </div>
            `)
        }
        
        $("#cardEstandar").append(`
        <div>
            <p><span>${Number.parseInt((Client.value / Client.year))* 15}<span></p>
        </div>
        `)
    });

    

});