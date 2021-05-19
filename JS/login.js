$(function() {

    $("form[name='login']").validate({

      rules: {

        email: {
            required: true,
            email: true
        },
        
        contraseña: {
            required: true,
            minlength: 8
        },
      },

      messages: {
        email: "Correo eléctronico invalido, porfavor digite nuevamente",
        contraseña: "La contraseña es invalida, porfavor digite nuevamente",
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });