$(document).ready(function(){

    //Selecciono los elementos
    const form = $('#form');
    const inputName = $('#formName');
    const inputCar = $('#formCar');
    const inputYear = $('#formYear');
    const inputValue = $('#formValue');
    const usdBlue = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

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
            $("#datosForm").html(`
            <div class="alert alert-danger text-center datosIngresados" role="alert" data-aos="fade-up">
                <p>¡No completaste todos los campos del formulario!</p>
            </div>
            `)
        }
        else{
            $("#datosForm").html(`
            <div class="datosIngresados" data-aos="fade-down" data-aos-duration="1000">
                <p><span><strong>${user.name}</strong></span>, a continuación te detallamos el valor de tu seguro:</p>
                <p>El valor que aparecerá a continuación es el que corresponde a nuestro plan <strong>Estándar</strong>. Podrá consultar el valor de nuestros otros planes debajo, en la sección "Nuestros Planes".</p>
                <div class="wrapper">
                    <div class="divider div-transparent div-dot"></div>
                </div>
                <p class="resultadoForm">Su modelo: <strong>${user.car}</strong></p>
                <p class="mt-5">El año de su vehiculo: <strong>${user.year}</strong></p>
                <p class="mt-5">El valor final su seguro será de: <span class="totalFont"><strong>$ ${Number.parseInt((user.value / user.year))* 15}</strong></span>.</p>
            </div>
            `)

            $(".planes").show();

            $.get(usdBlue,function(datos){
                let estandarValue;
                $('#cardEstandar').html(`
                <div class="card-body">
                    <p class="card-text mt-5">Te cubrimos cualquier situacion ante responsabilidad civil.</p>
                    <a href="#" class="btn btn-warning btn-card">Contratar Online</a>
                </div>
                <div class="card-body">
                    <p class="mt-5 card-plan">Este plan incluye:</p>
                    <ul class="mt-4"">
                        <li class="card-li">Beneficios Safer</li>
                        <li class="mt-2 card-li">Responsabilidad Civil</li>
                    </ul>

                    <p class="mt-5 card-plan">Este plan no incluye:</p>
                    <ul class="mt-4">
                        <li class="card-li">Daños parciales con franquicia</li>
                        <li class="mt-2 card-li">Robo e incendio parcial</li>
                        <li class="mt-2 card-li">Incendio, daños y robo total</li>
                        <li class="mt-2 card-li">Cristales</li>
                        <li class="mt-2 card-li">Cerradura</li>
                        <li class="mt-2 card-li">Granizo</li>
                        <li class="mt-2 card-li">Daños parciales por inundación</li>
                    </ul>
                </div>

                <div>
                    <p>$<span class="totalCards">${estandarValue = (Number.parseInt((user.value / user.year))* 15)}</span>/mes</p>
                </div>
                <div>
                    <p>El valor de tu seguro en U$D Oficial: <strong>$ ${Number.parseInt(estandarValue / (Number.parseInt(datos[0].casa.venta)))}</strong></p>
                    <p>El valor de tu seguro en U$D Blue: <strong>$ ${Number.parseInt(estandarValue / (Number.parseInt(datos[1].casa.venta)))}</strong></p>
                </div>
                `)
            });


            $.get(usdBlue,function(datos){
                let baseValue;
                $('#cardBase').html(`
                <div class="card-body">
                    <p class="card-text mt-5">Te cubrimos robo, incendio y destrucción totales.</p>
                    <a href="#" class="btn btn-warning btn-card">Contratar Online</a>
                </div>
                <div class="card-body">
                    <p class="mt-5 card-plan">Este plan incluye:</p>
                    <ul class="mt-4"">
                        <li class="card-li">Beneficios Safer</li>
                        <li class="mt-2 card-li">Responsabilidad Civil</li>
                        <li class="mt-2 card-li">Incendio, daños y robo total</li>
                    </ul>

                    <p class="mt-5 card-plan">Este plan no incluye:</p>
                    <ul class="mt-4">
                        <li class="card-li">Daños parciales con franquicia</li>
                        <li class="mt-2 card-li">Robo e incendio parcial</li>
                        <li class="mt-2 card-li">Cristales</li>
                        <li class="mt-2 card-li">Cerradura</li>
                        <li class="mt-2 card-li">Granizo</li>
                        <li class="mt-2 card-li">Daños parciales por inundación</li>
                    </ul>
                </div>

                <div>
                    <p>$<span class="totalCards">${baseValue = (Number.parseInt((user.value / user.year))* 18)}</span>/mes</p>
                </div>
                <div>
                    <p>El valor de tu seguro en U$D Oficial: <strong>$ ${Number.parseInt(baseValue / (Number.parseInt(datos[0].casa.venta)))}</strong></p>
                    <p>El valor de tu seguro en U$D Blue: <strong>$ ${Number.parseInt(baseValue / (Number.parseInt(datos[1].casa.venta)))}</strong></p>
                </div>
                `)
            });


            $.get(usdBlue,function(datos){
                let fullValue;
                $('#cardFull').html(`
                <div class="card-body">
                    <p class="card-text mt-5">Además te cubrimos granizo, cristales, cerraduras y ruedas.</p>
                    <a href="#" class="btn btn-warning btn-card">Contratar Online</a>
                </div>
                <div class="card-body">
                    <p class="mt-5 card-plan">Este plan incluye:</p>
                    <ul class="mt-4"">
                        <li class="card-li">Beneficios Safer</li>
                        <li class="mt-2 card-li">Responsabilidad Civil</li>
                        <li class="mt-2 card-li">Robo e incendio parcial</li>
                        <li class="mt-2 card-li">Incendio, daños y robo total</li>
                        <li class="mt-2 card-li">Cristales</li>
                        <li class="mt-2 card-li">Cerradura</li>
                        <li class="mt-2 card-li">Granizo</li>
                        <li class="mt-2 card-li">Daños parciales por inundación</li>
                    </ul>

                    <p class="mt-5 card-plan">Este plan no incluye:</p>
                    <ul class="mt-4">
                        <li class="card-li">Daños parciales con franquicia</li>
                    </ul>
                    </div>
                <div>
                    <p>$<span class="totalCards">${fullValue = (Number.parseInt((user.value / user.year))* 21)}</span>/mes</p>
                </div>
                <div>
                    <p>El valor de tu seguro en U$D Oficial: <strong>$ ${Number.parseInt(fullValue / (Number.parseInt(datos[0].casa.venta)))}</strong></p>
                    <p>El valor de tu seguro en U$D Blue: <strong>$ ${Number.parseInt(fullValue / (Number.parseInt(datos[1].casa.venta)))}</strong></p>
                </div>
                `)
            });


            $.get(usdBlue,function(datos){
                let safestValue;
                $('#cardSafest').html(`
                <div class="card-body">
                    <p class="card-text mt-5">Te cubrimos los daños parciales superiores a la franquicia que elijas.</p>
                    <a href="#" class="btn btn-warning btn-card">Contratar Online</a>
                    </div>
                <div class="card-body card-safest">
                    <p class="mt-5 card-plan">Este plan incluye:</p>
                    <ul class="mt-4">
                        <li class="card-li">Beneficios Safer</li>
                        <li class="mt-2 card-li">Responsabilidad Civil</li>
                        <li class="mt-2 card-li">Daños parciales con franquicia</li>
                        <li class="mt-2 card-li">Robo e incendio parcial</li>
                        <li class="mt-2 card-li">Incendio,daños y robo total</li>
                        <li class="mt-2 card-li">Cristales</li>
                        <li class="mt-2 card-li">Cerradura</li>
                        <li class="mt-2 card-li">Granizo</li>
                        <li class="mt-2 card-li">Daños parciales por inundación</li>
                    </ul>
                    </ul>
                </div>

                <div>
                    <p>$<span class="totalCards">${safestValue = (Number.parseInt((user.value / user.year))* 24)}</span>/mes</p>
                </div>
                <div>
                    <p>El valor de tu seguro en U$D Oficial: <strong>$ ${Number.parseInt(safestValue / (Number.parseInt(datos[0].casa.venta)))}</strong></p>
                    <p>El valor de tu seguro en U$D Blue: <strong>$ ${Number.parseInt(safestValue / (Number.parseInt(datos[1].casa.venta)))}</strong></p>
                </div>
                `)
            });
        };
    });
});