$(document).ready(function(){

    const formulario = $('#contactoForm');
    const contactName = $('#contactName');
    const contactSurname = $('#contactSurname');
    const contactEmail = $('#contactEmail');
    const contactSubject = $('#contactSubject');
    const contactMessage = $('#contactMessage');


    formulario.submit(function(event) {
        event.preventDefault();

        const formName = contactName.val();
        const formSurname = contactSurname.val();
        const formEmail = contactEmail.val();
        const formSubject = contactSubject.val();
        const formMessage = contactMessage.val();


        if(formName == '' && formSurname == '' && formEmail == '' && formSubject == '' && formMessage == ''){
            $("#contact").html(`
            <div class="container alert alert-danger text-center datosIngresados" role="alert" data-aos="fade-up">
                <p>¡No completaste todos los campos del formulario!</p>
            </div>
            `)
        }
        else{
            $("#contact").html(`
            <div class="container alert alert-success text-center datosIngresados" role="alert" data-aos="fade-up">
                <p>¡Formulario enviado correctamente!</p>
            </div>
            `)
        }
    })
});