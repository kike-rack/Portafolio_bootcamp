$(document).ready(function () {
    $("#cambiarTema").on('click', function () {
        $('body').toggleClass('light-theme');

        if ($('body').hasClass('light-theme')) {
            $(this).text('🌙 Tema oscuro');
            $(this).removeClass('btn-outline-light')
                .addClass('btn-outline-dark');
        } else {
            $(this).text('☀️ Tema claro');
            $(this).removeClass('btn-outline-dark')
                .addClass('btn-outline-light');
        }
    });
});



//fade in al hacer scroll

$(window).on('scroll', function () {
    $('.section').each(function () {
        let sectionTop = $(this).offset().top;
        let scrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();

        if (scrollTop + windowHeight > sectionTop + 100) {
            $(this).addClass('visible');
        }
    });
});

//verificacion

$(document).ready(function () {

    $('#botonVerificador').on('click', function () {

        const nombre = $('#nombre').val().trim();
        const email = $('#email').val().trim();
        const mensaje = $('#mensajeTexto').val().trim();

        // Expresión regular simple para email
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validación de campos vacíos
        if (nombre === '' || email === '' || mensaje === '') {
            mostrarMensaje('❌ Hay campos sin completar');
            return;
        }

        // Validación de correo
        if (!emailValido.test(email)) {
            mostrarMensaje('❌ El correo electrónico no es válido');
            return;
        }

        // Todo correcto
        mostrarMensaje('✅ ¡Gracias por contactarme!');
        
        // Opcional: limpiar formulario
        $('#nombre, #email, #mensajeTexto').val('');
    });

    function mostrarMensaje(texto) {
        $('#respuesta')
            .hide()
            .html(`<div class="notificacion">${texto}</div>`)
            .fadeIn();
    }

});

