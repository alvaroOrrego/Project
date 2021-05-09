$(function() {

    $("form[name='login']").validate({

      rules: {
        
        cuenta: "required",
            required: true,
        
        password: {
            required: true,
        },
      },

      messages: {
        cuenta: "Nombre de usuario invalido, porfavor digite nuevamente",
        password: "Contraseña invalida, porfavor digite nuevamente",
      },

      submitHandler: function(form) {
        form.submit();
      }
    });
  });