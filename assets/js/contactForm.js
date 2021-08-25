$(document).ready(function(){

    const form = $('contactForm');
    const contactName = $('contactName');
    const contactSurname = $('contactSurname');
    const contactEmail = $('contactEmail');
    const contactSubject = $('contactSubject');
    const contactMessage = $('contactMessage');


    form.submit(function(event) {
        event.preventDefault();

        if(contactName, contactSurname, contactEmail, contactSubject, contactMessage == ''){
            $("#datosForm").append(`
            <div class="alert alert-danger text-center datosIngresados" role="alert" data-aos="fade-up">
                <p>¡No completaste todos los campos del formulario!</p>
            </div>
            `)
        }
        else{
            $("#datosForm").append(`
            <div class="alert alert-success text-center datosIngresados" role="alert" data-aos="fade-up">
                <p>¡Formulario enviado correctamente!</p>
            </div>
            `)
        }
    })
});